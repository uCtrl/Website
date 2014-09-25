angular.module('teamModule')
	.controller('teamList', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
		/**
		 * Will contain team member information
		 *
		 * @type {{}}
		 */
		$scope.team = {};

		/**
		 * team.software empty object, mainly for intellisense purpose.
		 *
		 * @type {{firstName: string, lastName: string, email: string, post: string, text: string, picture: string}[]}
		 */
		$scope.team.software = [
			{
				"firstName": "",
				"lastName": "",
				"email": "",
				"post": "",
				"text": "",
				"picture": ""
			}
		];

		/**
		 * team.hardware empty object, mainly for intellisense purpose.
		 *
		 * @type {{firstName: string, lastName: string, email: string, post: string, text: string, picture: string}[]}
		 */
		$scope.team.hardware = [
			{
				"firstName": "",
				"lastName": "",
				"email": "",
				"post": "",
				"text": "",
				"picture": ""
			}
		];

		// Load team data at initialisation.
		$http.get('data/team.json')
			.then(function (res) {
				$scope.team = res.data;

				window.setTimeout(function () {
					$rootScope.$emit('memberLoaded');
				}, 500);
			});

		/**
		 * Display the user job in the team or N.A. for "Not Applicable".
		 *
		 * @param post
		 * @returns {*}
		 */
		$scope.position = function (post) {
			if (post == '') {
				post = 'N.A.';
			}

			return post;
		}
	}]);