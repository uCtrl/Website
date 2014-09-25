angular.module('loginModule')
	.controller('loginModal', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

		/**
		 * contain the translation for the controller
		 *
		 * @type {{en: {LoginUserAdnPassEmpty: string, LoginWrongConnexion: string}, fr: {LoginUserAdnPassEmpty: string, LoginWrongConnexion: string}}}
		 */
		$scope.lang = {
			en: {
				'LoginUserAdnPassEmpty': '<strong>Warning!</strong> Username and/or password are empty.',
				'LoginWrongConnexion': '<strong>Warning!</strong> Username and password do not match.',
				'RegisterInputMissing': 'Some input were missing: ',
				'RegisterWrongUsernameFormat': 'Wrong Username format only accept alphanumerical characters.',
				'RegisterWrongFirstNameFormat': 'Wrong First name format only accept alphabetic characters.',
				'RegisterWrongLastNameFormat': 'Wrong Last name format only accept alphabetic characters.',
				'RegisterWrongPassValidation': 'The password and the password validation were not he same.',
				'RegisterSuccess': 'Validation successful.'
			},
			fr: {
				'LoginUserAdnPassEmpty': '<strong>Attention!</strong> Le nom d\'utilisateur et/ou le mot de passe ne sont pas remplis.',
				'LoginWrongConnexion': '<strong>Attention!</strong> Le nom d\'utilisateur et le mot de passe ne correspondent pas dans notre base de donnée.',
				'RegisterInputMissing': 'Certaines entrées son manquantes : ',
				'RegisterWrongUsernameFormat': 'Le champ d\'entrée du nom d\'utilisateur accepte seulement les charactères alphanumériques.',
				'RegisterWrongFirstNameFormat': 'Le champ d\'entrée du prénom accepte seulement les charactères alphabétiques.',
				'RegisterWrongLastNameFormat': 'Le champ d\'entrée du nom de famille accepte seulement les charactères alphabétiques.',
				'RegisterWrongPassValidation': 'Le mot de passe ainsi que son champ de validation ne correspondent pas.',
				'RegisterSuccess': 'Validation réussie.'
			}
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
				warning.html($scope.lang[$rootScope.getLang()].LoginUserAdnPassEmpty).show();

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
				warning.html($scope.lang[$rootScope.getLang()].LoginWrongConnexion).show();
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
				exit[exit.length] = $scope.lang[$rootScope.getLang()].RegisterInputMissing + missing.join(', ') + '.';
			} else {
				//Format validation
				if (!validator.isAlphanumeric($scope.user.username)) {
					exit[exit.length] = $scope.lang[$rootScope.getLang()].RegisterWrongUsernameFormat;
				}

				if (!validator.isAlpha($scope.user.firstName)) {
					exit[exit.length] = $scope.lang[$rootScope.getLang()].RegisterWrongFirstNameFormat;
				}

				if (!validator.isAlpha($scope.user.lastName)) {
					exit[exit.length] = $scope.lang[$rootScope.getLang()].RegisterWrongLastNameFormat;
				}
			}

			if (($scope.user.password1.length > 0 || $scope.user.password2.length > 0) && $scope.user.password1 !== $scope.user.password2) {
				exit[exit.length] = $scope.lang[$rootScope.getLang()].RegisterWrongPassValidation;
			}

			if (exit.length > 0) {
				$scope.passValidation = false;
			} else {
				$scope.passValidation = true;
				$scope.disableButtons = true;
				exit[0] = $scope.lang[$rootScope.getLang()].RegisterSuccess;
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