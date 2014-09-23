'use strict';
(function () {
	/**
	 * Handle login modal display.
	 */
	var loginM = angular.module('loginModule', ['ui.bootstrap']);

	loginM.controller('loginModal', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
		/**
		 * Contain the current logged user.
		 *
		 * @type {string}
		 */
		$rootScope.currentUser = '';

		/**
		 * Contain the current session id.
		 *
		 * @type {string}
		 */
		$rootScope.currentSessionID = '';

		/**
		 * Empty user object, mainly for intellisense purpose, will contain user information after registration to the
		 * portal.
		 *
		 * @type {{username: string, password1: string, password2: string, firstName: string, lastName: string}}
		 */
		$scope.user = {
			"username": '',
			"password1": '',
			"password2": '',
			"firstName": '',
			"lastName": ''
		};

		/**
		 * Contain if the register validation pass or fail.
		 *
		 * @type {boolean}
		 */
		$scope.passValidation = true;

		/**
		 * Error register form message.
		 *
		 * @type {string}
		 */
		$scope.validationMessages = '';

		/**
		 * Disable the "Register and login", the 'Login' and the 'Register' button when loading portal to obstruct multi
		 * login attempt.
		 *
		 * @type {boolean}
		 */
		$scope.disableButtons = false;

		/**
		 * Template list.
		 *
		 * @type {{name: string, url: string}[]}
		 */
		$scope.templates =
			[
				{ name: 'login', url: 'views/login/login_modal.html'},
				{ name: 'register', url: 'views/login/register_modal.html'}
			];

		/**
		 * Set the default template to the login one.
		 */
		$scope.template = $scope.templates[0];

		/**
		 * Change the displayed modal form for the register one.
		 */
		$scope.register = function () {
			$scope.template = $scope.templates[1];
		};

		/**
		 * Change the displayed modal form for the login one.
		 */
		$scope.login = function () {
			$scope.template = $scope.templates[0];
		};

		/**
		 * Verify the information given for portal registration.
		 */
		$scope.portalRegister = function () {
			registerValidation();

			if ($scope.passValidation) {
				$scope.portalConnect();
			}
		};

		/**
		 * Verify the information given for portal connexion.
		 *
		 * @param [username] {string}
		 * @param [password] {string}
		 */
		$scope.portalConnect = function (username, password) {
			if (password === undefined || username === undefined) {
				var user = $('#userNameUCtrl');
				var pass = $('#passwordUCtrl');

				username = user.val();
				password = pass.val();
			}

			var warning = $('#wrongPasswordUserAlert');

			if (password == '' || username == '') {
				warning.html('<strong>Warning!</strong> Username and/or password are empty.').show();

				return;
			}

			if (loginValidation(username, password)) {
				//Connexion success
				warning.hide();

				$rootScope.isLogged = true;

				$state.go('portal');
				$scope.close();
			} else {
				//Connexion fail
				warning.html('<strong>Warning!</strong> Username and password do not match.').show();
			}
		};

		/**
		 * Close the modal screen.
		 */
		$scope.close = function () {
			$rootScope.modalInstance.close();
		};

		/**
		 * Compile the different error in the register form.
		 */
		function registerValidation() {
			var exit = [];
			var missing = [];

			Object.getOwnPropertyNames($scope.user).forEach(function (val) {
				if ($scope.user[val].length < 1) {
					missing[missing.length] = val;
				} else {
					//Replace <, >, & and " with HTML entities
					$scope.user[val] = validator.escape($scope.user[val]);
				}
			});

			// Missing input data
			if (missing.length > 0) {
				exit[exit.length] = 'Some input were missing: ' + missing.join(', ') + '.';
			} else {
				//Format validation ---
				if (!validator.isAlphanumeric($scope.user.username)) {
					exit[exit.length] = 'Wrong Username format only accept alphanumerical characters';
				}

				if (!validator.isAlpha($scope.user.firstName)) {
					exit[exit.length] = 'Wrong First name format only accept alphabetic characters';
				}

				if (!validator.isAlpha($scope.user.lastName)) {
					exit[exit.length] = 'Wrong Last name format only accept alphabetic characters';
				}
				//---
			}

			if (($scope.user.password1.length > 0 || $scope.user.password2.length > 0) && $scope.user.password1 !== $scope.user.password2) {
				exit[exit.length] = 'The password and the password validation were not he same.';
			}

			if (exit.length > 0) {
				$scope.passValidation = false;
			} else {
				$scope.passValidation = true;
				$scope.disableButtons = true;
				exit[0] = 'Validation successful.';
			}

			$scope.validationMessages = exit;
		}

		/**
		 * Verity if the provided username and password were associate together.
		 *
		 * @param username {string}
		 * @param password {string}
		 * @returns {boolean}
		 */
		function loginValidation(username, password) {
			// TODO Create a real validation when the server will be ready

			return !!(username != '' && password == '123456');
		}

		/**
		 * Cookie support.
		 *
		 * @type {{set: set, get: get, test: test}}
		 */
		$rootScope.cookie = {
			/**
			 * Set cookie value.
			 *
			 * @param cname {string}
			 * @param cvalue {string}
			 * @param exdays {number}
			 */
			set: function (cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = cname + "=" + cvalue + "; " + expires;
			},
			/**
			 * Get cookie value.
			 *
			 * @param cname {string}
			 * @returns {string}
			 */
			get: function (cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') c = c.substring(1);
					if (c.indexOf(name) != -1) {
						return c.substring(name.length, c.length);
					}
				}
				return "";
			},
			/**
			 * Test if cookie exist.
			 *
			 * @param cname {string}
			 * @returns {boolean}
			 */
			test: function (cname) {
				var val = $rootScope.cookie.get(cname);
				return val == "";
			}
		}
	}]);
})();