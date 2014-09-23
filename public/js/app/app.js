'use strict';
(function() {
	var app = angular.module('app', ['ui.router', 'loginModule', 'teamModule']);
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					"" : {
						templateUrl: 'views/home/index_container.html'
					},
					'about@home': {
						templateUrl: 'views/home/about.html'
					},
					'download@home': {
						templateUrl: 'views/home/download.html'
					},
					'sourceCode@home': {
						templateUrl: 'views/home/sourceCode.html'
					},
					'team@home': {
						templateUrl: 'views/home/team.html'
					}
				}
			})
			.state('portal', {
				url: '/portal'
			});
	});
	app.controller('mainMenu', ['$rootScope', '$scope', '$modal', '$state', function($rootScope, $scope, $modal, $state) {
		$scope.state = $state;
		$rootScope.modalInstance = {};

		$scope.modalOpen = function() {
			$rootScope.modalInstance = $modal.open({
				templateUrl: 'views/login/singIn_container.html'
			});
		};

		$scope.scrollSmooth = function(id) {
			$(".navbar-collapse").collapse('hide');

			$.scrollTo('#' + id, 800);
		};
	}]);
})();