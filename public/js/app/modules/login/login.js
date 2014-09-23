'use strict';
(function() {
	var loginM = angular.module('loginModule', ['ui.bootstrap']);

	loginM.controller('loginModal', ['$rootScope','$scope', function($rootScope, $scope) {
		$scope.user = {
			"username": '',
			"password1": '',
			"password2": '',
			"firstName": '',
			"lastName": ''
		};

		$scope.passValidation = true;
		$scope.validationMessages = '';
		$scope.disableButtons = false;

		$scope.templates =
			[
				{ name: 'login', url: 'views/login/login_modal.html'},
				{ name: 'register', url: 'views/login/register_modal.html'}
			];

		$scope.template = $scope.templates[0];

		$scope.register = function() {
			$scope.template = $scope.templates[1];
		};

		$scope.login = function() {
			$scope.template = $scope.templates[0];
		};

		$scope.portalRegister = function() {
			registerValidation();

			if ($scope.passValidation) {
				$scope.portalConnect();
			}
		};

		$scope.portalConnect = function() {
			alert('portalConnect login from scope singInModal!');
		};

		$scope.close = function() {
			$rootScope.modalInstance.close();
		};

		function registerValidation() {
			var exit = [];
			var missing = [];

			Object.getOwnPropertyNames($scope.user).forEach(function(val) {
				if ($scope.user[val].length < 1) {
					missing[missing.length] = val;
				}
			});

			if (missing.length > 0) {
				exit[exit.length] = 'Some input were missing: ' + missing.join(', ') + '.';
			}

			//TODO verify input format

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
	}]);
})();