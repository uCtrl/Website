'use strict';
(function () {
	/**
	 * Main application module.
	 */
	var app = angular.module('app', ['ui.router', 'loginModule', 'teamModule', 'demoModule', 'pascalprecht.translate']);

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
						templateUrl: 'views/home/indexContainer.html'
					},
					'banner@home': {
						templateUrl: 'views/home/banner.html'
					},
					'about@home': {
						templateUrl: 'views/home/about.html'
					},
					'demo@home': {
						templateUrl: 'views/home/demo.html'
					},
					'itWork@home': {
						templateUrl: 'views/home/itWork.html'
					},
					'easy@home': {
						templateUrl: 'views/home/easy.html'
					},
					'compatibility@home': {
						templateUrl: 'views/home/compatibility.html'
					},
					'openTech@home': {
						templateUrl: 'views/home/openTech.html'
					},
					'jumpIn@home': {
						templateUrl: 'views/home/jumpIn.html'
					},
					'followUs@home': {
						templateUrl: 'views/home/followUs.html'
					}
				}
			})
			.state('portal', {
				url: '/portal',
				templateUrl: 'views/portal/portal_container.html'
			});
	});

	app.controller('mainMenu', ['$rootScope', '$scope', '$modal', '$state', '$translate', function ($rootScope, $scope, $modal, $state, $translate) {
		/**
		 * Allow access to the current window state.
		 */
		$scope.state = $state;

		/**
		 * List of available languages
		 *
		 * @type {{value: string, text: string}[]}
		 */
		$rootScope.availableLanguage = [{'value': 'en', text:'English'}, {'value': 'fr', text:'Français'}];

		/**
		 * Selected language
		 *
		 * @type {string}
		 */
		$scope.selectedLanguage = $rootScope.availableLanguage[1].value;

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
		 *
		 * @param event {object}
		 */
		$scope.modalOpen = function (event) {
			event.stopPropagation();

			$rootScope.modalInstance = $modal.open({
				templateUrl: 'views/login/singInContainer.html'
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

		/**
		 * Set the current page lang
		 *
		 * @param [lang] {string)
		 */
		$scope.setLang = function (lang) {
			if (lang === undefined) {
				lang = $scope.selectedLanguage;
			} else {
				// Search in available language and select-it
				var index = arrayObjectIndexOf($rootScope.availableLanguage, lang, 'value');
				if (index != -1) {
					$scope.selectedLanguage = $rootScope.availableLanguage[index].value;
				}
			}

			cookie.set('lang', lang, 365);

			$translate.use(lang);

			langSelect.selectpicker('render');
		};

		/**
		 * Return the current lang
		 *
		 * @returns {string}
		 */
		$rootScope.getLang = function () {
			return $scope.selectedLanguage;
		};

		/**
		 * Get the saved language, if no one, it set the language to english
		 *
		 * @returns {string}
		 */
		$scope.getUserLang = function () {
			var lang = cookie.get('lang');

			if (lang == '') {
				lang = 'en';
			}

			$scope.setLang(lang);

			var index = arrayObjectIndexOf($rootScope.availableLanguage, lang, 'value');
			if (index != -1) {
				$scope.selectedLanguage = $rootScope.availableLanguage[index].value;
			}

			//Need a time out to let the time to angular to generate the select
			window.setTimeout(function() {
				langSelect.selectpicker('refresh');
			}, 50);
		};

		// At start, call the getUserLang() function
		$scope.getUserLang();
	}]);

	app.controller('footerMenu', ['$rootScope', '$scope', '$location', '$anchorScroll', '$state', function ($rootScope, $scope, $location, $anchorScroll, $state) {

		/**
		 * Allow multiple state, anchor navigation and wait for loading of data
		 *
		 * @param page {string}
		 * @param id {string}
		 */
		$scope.scrollTo = function (page, id) {
			var oldState = $state.current.name;
			$state.go(page).then(function () {
				if (id !== undefined) {
					// Special home handle
					if ($state.current.name == 'home' && oldState != 'home') {
						// Need to wait some time for team member list generation before move, must for the 'Download' and
						// the 'Source code' section
						$rootScope.$on('memberLoaded', function () {
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