'use strict';
(function() {
	var app = angular.module('app', ['ui.router']);
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
			})
	});
	app.controller('mainMenu', ['$scope', '$state', function($scope, $state) {
			$scope.state = $state;
		}]
	);
})();