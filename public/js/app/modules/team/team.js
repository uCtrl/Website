'use strict';
(function() {
	var teamM = angular.module('teamModule', []);

	teamM.controller('teamList', function($scope, $http) {
		$scope.team = {};
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

		// Load team data
		$http.get('data/team.json')
			.then(function(res) {
				$scope.team = res.data;
			});

		$scope.position = function(post) {
			if (post == '') {
				post = 'N.A.';
			}

			return post;
		}
	});
})();