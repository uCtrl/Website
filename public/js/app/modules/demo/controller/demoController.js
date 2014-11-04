'use strict';
angular.module('demoModule')
	.controller('demo', ['$rootScope', '$scope', function($rootScope, $scope) {
		$scope.state = 0;
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
		$scope.info = [
				["{{'demoTvOn' | translate}}", "{{'demoMusicOn' | translate}}", '25°C', "{{'demoLightOn' | translate}}"],
				["{{'demoTvOff' | translate}}", "{{'demoMusicOff' | translate}}", '20°C', "{{'demoLightOff' | translate}}"],
				["{{'demoTvOff' | translate}}", "{{'demoMusicOff' | translate}}", '12°C', "{{'demoLightOff' | translate}}"]
			];
		$scope.lang = function() {
				var lang = cookie.get('lang');
				if (lang == "") {
					return "en";
				} else {
					return lang;
				}
			};

		$scope.change = function(index) {
			if ($scope.state !== index && index > -1 && index < 3) {
				$scope.state = index;

				$scope.elements.icTv.tooltip('hide')
					.attr('data-original-title', $scope.info[$scope.state][0])
					.tooltip('fixTitle');
				$scope.elements.icSd.tooltip('hide')
					.attr('data-original-title', $scope.info[$scope.state][1])
					.tooltip('fixTitle');
				$scope.elements.icTm.tooltip('hide')
					.attr('data-original-title', $scope.info[$scope.state][2])
					.tooltip('fixTitle');
				$scope.elements.icLu.tooltip('hide')
					.attr('data-original-title', $scope.info[$scope.state][3])
					.tooltip('fixTitle');

				$scope.elements.btnHome.setAttribute('class', isItActive(0));
				$scope.elements.btnWork.setAttribute('class', isItActive(1));
				$scope.elements.btnVacation.setAttribute('class', isItActive(2));

				$scope.elements.image.setAttribute('class', 'image b bg' + (index + 1));
			}

			function isItActive(id) {
				if (id == index) {
					return 'btn-slide active';
				} else {
					return 'btn-slide';
				}
			}
		};

		$scope.ini = function() {
			$scope.elements.icTv.attr('title', $scope.info[$scope.state][0]);
			$scope.elements.icSd.attr('title', $scope.info[$scope.state][1]);
			$scope.elements.icTm.attr('title', $scope.info[$scope.state][2]);
			$scope.elements.icLu.attr('title', $scope.info[$scope.state][3]);

			$(".ic").tooltip();
		};

		$scope.ini();
	}]);