'use strict';
angular.module('demoModule')
	.controller('demo', ['$rootScope', '$scope', function($rootScope, $scope) {
		/**
		 * Current state selected
		 *
		 * @type {number}
		 */
		$scope.state = 0;

		/**
		 * Container of the demo page element
		 *
		 * @type {{btnHome: HTMLElement, btnWork: HTMLElement, btnVacation: HTMLElement, icLu: (*|jQuery|HTMLElement), icSd: (*|jQuery|HTMLElement), icTm: (*|jQuery|HTMLElement), icTv: (*|jQuery|HTMLElement), image: *}}
		 */
		$scope.elements = {
				btnHome: document.getElementById('demoHome'),
				btnWork: document.getElementById('demoWork'),
				btnVacation: document.getElementById('demoVacation'),
				icLu: $('.ic.lu'),
				icSd: $('.ic.sd'),
				icTm: $('.ic.tm'),
				icTv: $('.ic.tv'),
				image: document.getElementsByClassName('image b')[0]
			};

		/**
		 * Array of tooltip text
		 *
		 * @type {{fr: *[], en: *[]}}
		 */
		$scope.info = {
			"fr": [
				["TV Ouverte","Musique Ouverte","25°C","Lumières Ouvertes"],
				["TV Éteinte","Musique Éteinte","20°C","Lumières Éteintes"],
				["TV Éteinte","Musique Éteinte","12°C","Lumières Éteintes"]
			],
			"en": [
				["TV is ON", "Music is ON","25°C","Lights are ON"],
				["TV is OFF","Music is OFF","20°C","Lights are OFF"],
				["TV is OFF","Music is OFF","12°C","Lights are OFF"]
			]
		};

		/**
		 * Array of stateActions for each of the state
		 *
		 * @type {*[]}
		 */
		$scope.stateActions =[
			[" active", " active", " active", " active"],
			["", "", " active", ""],
			["", "", " active", ""]
		];

		/**
		 * Switch the tooltips
		 * 
		 * @param index {number}
		 * @param [force] {boolean}
		 */
		$scope.change = function(index, force) {
			force = force || false;

			if ($scope.state !== index && index > -1 && index < 3 || force) {
				$scope.state = index;

				// Change tooltip text
				$scope.elements.icTv.tooltip('hide')
					.attr('data-original-title', $scope.info[$rootScope.getLang()][$scope.state][0])
					.tooltip('fixTitle');
				$scope.elements.icSd.tooltip('hide')
					.attr('data-original-title', $scope.info[$rootScope.getLang()][$scope.state][1])
					.tooltip('fixTitle');
				$scope.elements.icTm.tooltip('hide')
					.attr('data-original-title', $scope.info[$rootScope.getLang()][$scope.state][2])
					.tooltip('fixTitle');
				$scope.elements.icLu.tooltip('hide')
					.attr('data-original-title', $scope.info[$rootScope.getLang()][$scope.state][3])
					.tooltip('fixTitle');

				// Change icons color
				$scope.elements.icTv.attr('class', 'ic tv' + $scope.stateActions[$scope.state][0]);
				$scope.elements.icSd.attr('class', 'ic sd' + $scope.stateActions[$scope.state][1]);
				$scope.elements.icTm.attr('class', 'ic tm' + $scope.stateActions[$scope.state][2]);
				$scope.elements.icLu.attr('class', 'ic lu' + $scope.stateActions[$scope.state][3]);

				// Change button color
				$scope.elements.btnHome.setAttribute('class', isItActive(0));
				$scope.elements.btnWork.setAttribute('class', isItActive(1));
				$scope.elements.btnVacation.setAttribute('class', isItActive(2));

				// Change background image
				$scope.elements.image.setAttribute('class', 'image b bg' + (index + 1));
			}

			/**
			 * Return if th button must be active
			 * 
			 * @param id {number}
			 * @returns {string}
			 */
			function isItActive(id) {
				if (id == index) {
					return 'btn-slide active';
				} else {
					return 'btn-slide';
				}
			}
		};

		/**
		 * Listen to changeLang event
		 */
		$rootScope.$on('changeLang', function() {
			$scope.change($scope.state, true);
		});

		/**
		 * Initialise the tooltips
		 */
		$scope.ini = function() {
			$scope.elements.icTv.attr('title', $scope.info[$rootScope.getLang()][$scope.state][0]);
			$scope.elements.icSd.attr('title', $scope.info[$rootScope.getLang()][$scope.state][1]);
			$scope.elements.icTm.attr('title', $scope.info[$rootScope.getLang()][$scope.state][2]);
			$scope.elements.icLu.attr('title', $scope.info[$rootScope.getLang()][$scope.state][3]);

			$(".ic").tooltip();
		};

		$scope.ini();
	}]);