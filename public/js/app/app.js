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
				},
			});
	});
	app.controller('mainMenu', ['$scope', '$modal', '$state', function($scope, $modal, $state) {
			$scope.state = $state;

			$scope.open = function(){

				console.log('I am here!!!!!');

				// open modal whithout changing url
				$modal.open({
					templateUrl: 'views/login_modal.html'
				});

				// I need to open popup via $state.go or something like this
			};
		}]
	);
})();