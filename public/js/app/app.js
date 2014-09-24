'use strict';
(function () {
	/**
	 * Main application module.
	 */
	var app = angular.module('app', ['ui.router', 'loginModule', 'teamModule']);

	/**
	 * Handle the application state routing.
	 */
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					"": {
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
				url: '/portal',
				templateUrl: 'views/portal/portal_container.html'
			});
	});

	app.controller('mainMenu', ['$rootScope', '$scope', '$modal', '$state', function ($rootScope, $scope, $modal, $state) {
		/**
		 * Allow access to the current window state.
		 */
		$scope.state = $state;

		/**
		 * Contain the modal instance.
		 *
		 * Give access to the modal object to all the modules.
		 *
		 * @type {{}}
		 */
		$rootScope.modalInstance = {};

		/**
		 * Contain if the user is logged
		 *
		 * @type {boolean}
		 */
		$rootScope.isLogged = false;

		/**
		 * Open the login modal window.
		 */
		$scope.modalOpen = function () {
			$rootScope.modalInstance = $modal.open({
				templateUrl: 'views/login/singIn_container.html'
			});
		};

		/**
		 * Allow a animated scrolling to the wanted document anchor.
		 *
		 * @param id {string}
		 */
		$scope.scrollSmooth = function (id) {
			$(".navbar-collapse").collapse('hide');

			$.scrollTo('#' + id, 800);
		};
	}]);

	app.controller('footerMenu', ['$rootScope','$scope', '$location', '$anchorScroll', '$state', function($rootScope, $scope, $location, $anchorScroll, $state) {

		/**
		 * Allow multiple state, anchor navigation and wait for loading of data
		 *
		 * @param page {string}
		 * @param id {string}
		 */
		$scope.scrollTo = function(page, id) {
			var oldState = $state.current.name;
			$state.go(page).then(function() {
				if (id !== undefined) {
					// Special home handle
					if ($state.current.name == 'home' && oldState != 'home') {
						// Need to wait some time for team member list generation before move, must for the 'Download' and
						// the 'Source code' section
						$rootScope.$on('memberLoaded', function() {
							$.scrollTo('#' + id, 300);
						});
					} else {
						$.scrollTo('#' + id, 800);
					}
				}
			});
		};
	}]);
})();