'use strict';
(function() {
	var app = angular.module('app', ['ui.router', 'ui.bootstrap']);
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					"" : {
						templateUrl: 'views/index_container.html'
					},
					'about@home': {
						templateUrl: 'views/about.html'
					},
					'download@home': {
						templateUrl: 'views/download.html'
					},
					'sourceCode@home': {
						templateUrl: 'views/sourceCode.html'
					},
					'team@home': {
						templateUrl: 'views/team.html'
					}
				}
			});
	});
	app.controller('mainMenu', ['$scope', '$modal', '$state', '$location', '$anchorScroll', function($scope, $modal, $state, $location, $anchorScroll) {
		$scope.state = $state;

		$scope.open = function() {

			$modal.open({
				templateUrl: 'views/login_modal.html',
				controller: singInModal
			});
		};

		$scope.scrollTo = function(id) {
			$(".navbar-collapse").collapse('hide');

			$location.hash(id);
			$anchorScroll();
		};

		var singInModal = function($scope, $modalInstance) {
			$scope.register = function() {
				alert('Catch register from scope singInModal!');
			};

			$scope.login = function() {
				alert('Catch login from scope singInModal!');
			};

			$scope.portalConnect = function() {
				alert('portalConnect login from scope singInModal!');
			};

			$scope.close = function() {
				$modalInstance.dismiss('cancel');
			}
		}
	}]);
})();