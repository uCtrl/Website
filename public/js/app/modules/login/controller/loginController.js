'use strict';
angular.module('loginModule')
	.controller('loginModal', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

		/**
		 * Contain the translation for the controller
		 *
		 * @type {{en: {LoginUserAdnPassEmpty: string, LoginWrongConnexion: string, RegisterInputMissing: string,
		 * RegisterWrongUsernameFormat: string, RegisterWrongFirstNameFormat: string, RegisterWrongLastNameFormat: string,
		 * RegisterWrongPassValidation: string, RegisterSuccess: string}, fr: {LoginUserAdnPassEmpty: string,
		 * LoginWrongConnexion: string, RegisterInputMissing: string, RegisterWrongUsernameFormat: string,
		 * RegisterWrongFirstNameFormat: string, RegisterWrongLastNameFormat: string, RegisterWrongPassValidation: string,
		   RegisterSuccess: string}}}
		 */
		$scope.lang = {
			en: {
				"LoginUserAdnPassEmpty": "<strong>Warning!</strong> Username and/or password are empty.",
				"LoginWrongConnexion": "<strong>Warning!</strong> Username and password do not match.",
				"RegisterInputMissing": "Some input were missing: ",
				"RegisterWrongUsernameFormat": "Wrong Username format only accept alphanumerical characters.",
				"RegisterWrongFirstNameFormat": "Wrong First name format only accept alphabetic characters.",
				"RegisterWrongLastNameFormat": "Wrong Last name format only accept alphabetic characters.",
				"RegisterWrongPassValidation": "The password and the password validation were not he same.",
				"RegisterSuccess": "Validation successful."
			},
			fr: {
				"LoginUserAdnPassEmpty": "<strong>Attention!</strong> Le nom d\'utilisateur et/ou le mot de passe ne sont pas remplis.",
				"LoginWrongConnexion": "<strong>Attention!</strong> Le nom d\'utilisateur et le mot de passe ne correspondent pas dans notre base de données.",
				"RegisterInputMissing": "Certaines entrées sont manquantes : ",
				"RegisterWrongUsernameFormat": "Le champ d\'entrée du nom d\'utilisateur accepte seulement les caractères alphanumériques.",
				"RegisterWrongFirstNameFormat": "Le champ d\'entrée du prénom accepte seulement les caractères alphabétiques.",
				"RegisterWrongLastNameFormat": "Le champ d\'entrée du nom de famille accepte seulement les caractères alphabétiques.",
				"RegisterWrongPassValidation": "Le mot de passe ainsi que son champ de validation ne correspondent pas.",
				"RegisterSuccess": "Validation réussie."
			}
		};

		/**
		 * This function is use to translate the text
		 *
		 * @param sentence {string}
		 * @returns {*}
		 */
		$scope.translate = function(sentence) {
			// Test if the lang exist
			var lang = $rootScope.getLang();
			var index = arrayObjectIndexOf($rootScope.availableLanguage, lang, 'value');
			if (index == -1) {
				lang = 'en';
			}

			return $scope.lang[lang][sentence];
		};

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
				{ name: 'login', url: 'views/login/loginModal.html'},
				{ name: 'register', url: 'views/login/registerModal.html'}
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
				$scope.portalConnect($('#registerUserNameUCtrl').val(), $('#registerPasswordUCtrl').val());
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
				warning.html($scope.translate('LoginUserAdnPassEmpty')).show();

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
				warning.html($scope.translate('LoginWrongConnexion')).show();
			}
		};

		/**
		 * Close the modal screen.
		 */
		$scope.close = function () {
			$rootScope.modalInstance.close();
		};

		/**
		 * Compile the different views.error in the register form.
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
				exit[exit.length] = $scope.translate('RegisterInputMissing') + missing.join(', ') + '.';
			} else {
				//Format validation
				if (!validator.isAlphanumeric($scope.user.username)) {
					exit[exit.length] = $scope.translate('RegisterWrongUsernameFormat');
				}

				if (!validator.isAlpha($scope.user.firstName)) {
					exit[exit.length] = $scope.translate('RegisterWrongFirstNameFormat');
				}

				if (!validator.isAlpha($scope.user.lastName)) {
					exit[exit.length] = $scope.translate('RegisterWrongLastNameFormat');
				}
			}

			if (($scope.user.password1.length > 0 || $scope.user.password2.length > 0) && $scope.user.password1 !== $scope.user.password2) {
				exit[exit.length] = $scope.translate('RegisterWrongPassValidation');
			}

			if (exit.length > 0) {
				$scope.passValidation = false;
			} else {
				$scope.passValidation = true;
				$scope.disableButtons = true;
				exit[0] = $scope.translate('RegisterSuccess');
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
	}]);