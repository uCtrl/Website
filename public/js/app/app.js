'use strict';
(function () {
	/**
	 * Main application module.
	 */
	var app = angular.module('app', ['ui.router', 'loginModule', 'teamModule', 'pascalprecht.translate']);

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

	app.config(['$translateProvider', function ($translateProvider) {
		$translateProvider.translations('en', {
			/*Home*/
			'About': 'About',
			'Team': 'Team',
			'Download': 'Download',
			'SourceCode': 'Source code',
			'ForkGithub': 'Fork us on Github',
			'SingIn': 'Sing in',
			'GoToPortal': 'Go to your portal',
			'Portal': 'Portal',
			'Home': 'Home',
			'FollowUs': 'Follow Us',
			'AboutP1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla metus. Nullam dapibus velit nec dignissim molestie. Suspendisse a ex ac diam auctor convallis. Nullam vitae convallis ex, ut dapibus enim. Proin tempor velit justo, lacinia varius sem ultrices non. Proin non fermentum lorem, sit amet accumsan arcu. Curabitur hendrerit nulla eu mi auctor blandit. Vivamus vitae lectus et ante porttitor eleifend vel vitae leo. Maecenas mollis turpis sit amet arcu sagittis rutrum vel a quam. In magna purus, blandit quis neque sit amet, mattis vehicula sapien. Vivamus feugiat, nisi vitae pellentesque ullamcorper, urna lectus convallis leo, et cursus tellus odio eu ligula. Vivamus sed vestibulum urna. Aliquam semper massa gravida, ultricies quam ornare, accumsan dui.',
			'AboutP2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est.',
			'Software': 'Software',
			'Hardware': 'Hardware',
			'SoftwareTeamDesc': 'This is the list of the project software team.',
			'HardwareTeamDesc': 'This is the list of the project hardware team.',
			'Name': 'Name',
			'Post': 'Position',
			'DownloadText1': 'All theses product were under the LGPL licence. It is important that you are in the know of the requirements of using a product or developing under LGPL. Learn about the',
			'DownloadText2': 'LGPL requirements here',
			'DownloadWhyTitle': 'Why LGPL license',
			'DownloadWhyText1': 'Because we are using the open source version of Qt libraries and tool to create the graphic interface of the application, we have to take the licence that they want users to have.',
			'DownloadWhyText2': 'More information about Qt licensing here.',
			'DesktopApp': 'Desktop Application',
			'PlaySorteText': 'Available directly on the ',
			'AppSorteText': 'Available directly on the ',
			'SourceCodeText1': 'All our source code is available on ',
			'SourceCodeText2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est. ',
			'Link': 'Link',
			/*Modal*/
			'ModalLoginPortal': 'Login to your portal',
			'ModalRegisterPortal' : 'Register to the µCtrl portal',
			'Close': 'Close',
			'Username': 'Username',
			'Password': 'Password',
			'PasswordConf': 'Password confirmation',
			'Register': 'Register',
			'FirstName': 'First name',
			'LastName': 'Last name',
			'Register&Login': 'Register and login',
			'ModalRegisterInfo1': 'This form allow you to register to the µCtrl web portal service.',
			'ModalRegisterInfo2': 'From this portal, you will be able to connect each of your devices and then control them from anywhere!',
			'FormValidFail': 'Form validation failed.',
			'FormValidOk': 'Form validation pass.',
			'FormValidOkTxt': 'Waiting for the portal to be ready.',
			'PassMismatch': 'Password mismatch',
			'CorrErrorPls': 'Please correct theses errors'
		});

		$translateProvider.translations('fr', {
			/*Home*/
			'About': 'À propos',
			'Team': 'Équipe',
			'Download': 'Téléchargement',
			'SourceCode': 'Code source',
			'ForkGithub': 'Suivez nous sur Github',
			'SingIn': 'Connexion',
			'GoToPortal': 'Aller au portail',
			'Portal': 'Portail',
			'Home': 'Accueil',
			'FollowUs': 'Suivez-nous',
			'AboutP1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla metus. Nullam dapibus velit nec dignissim molestie. Suspendisse a ex ac diam auctor convallis. Nullam vitae convallis ex, ut dapibus enim. Proin tempor velit justo, lacinia varius sem ultrices non. Proin non fermentum lorem, sit amet accumsan arcu. Curabitur hendrerit nulla eu mi auctor blandit. Vivamus vitae lectus et ante porttitor eleifend vel vitae leo. Maecenas mollis turpis sit amet arcu sagittis rutrum vel a quam. In magna purus, blandit quis neque sit amet, mattis vehicula sapien. Vivamus feugiat, nisi vitae pellentesque ullamcorper, urna lectus convallis leo, et cursus tellus odio eu ligula. Vivamus sed vestibulum urna. Aliquam semper massa gravida, ultricies quam ornare, accumsan dui.',
			'AboutP2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est.',
			'Software': 'Logiciel',
			'Hardware': 'Matériel',
			'SoftwareTeamDesc': 'Voici la liste des membre de l\'équipe logiciel.',
			'HardwareTeamDesc': 'Voici la liste des membre de l\'équipe matériel.',
			'Name': 'Nom ',
			'Post': 'Poste ',
			'DownloadText1': 'Tous ces produits sont sous la licence LGPL. Il est optant que vous connaissiez les requis d\'utilisation ou de programmation sous cette licence. Les requis de la LGPL sont ',
			'DownloadText2': 'disponible ici',
			'DownloadWhyTitle': 'Pourquoi utiliser la license LGPL',
			'DownloadWhyText1': 'Nous utilisons cette licence, car nous utilisons les produits "open source" de Qt, soit leurs librairies et leurs outils. Celons les conditions d\'utilisation, il nous faut donc garder la licence LGPL.',
			'DownloadWhyText2': 'Plus d\'information à propos des licences sous Qt est disponible ici.',
			'DesktopApp': 'Application Bureau',
			'PlayStoreText': 'Disponible directement sur le ',
			'AppStoreText': 'Disponible directement sur l\'',
			'SourceCodeText1': 'Notre code source est disponible sur ',
			'SourceCodeText2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est. ',
			'Link': 'Raccourcis',
			/*Modal*/
			'ModalLoginPortal': 'Connectez-vous à votre portail',
			'ModalRegisterPortal' : 'Inscrivez-vous au portail μCtrl',
			'Close': 'Fermer',
			'Username': 'Nom d\'utilisateur',
			'Password': 'Mot de passe',
			'PasswordConf': 'Confirmation du mot de passe',
			'Register': 'S\'inscrire',
			'FirstName': 'Prénom',
			'LastName': 'Nom de famille',
			'Register&Login': 'Inscription et connexion',
			'ModalRegisterInfo1': 'Ce formulaire vous offre la possibilité de s\'inscrire au portail web de µCtrl.',
			'ModalRegisterInfo2': 'À partir de ce portail, vous serez capable d\'y ajouter chacun de vos dispositifs et d\'y accéder par la suite de n\'importe où!',
			'FormValidFail': 'La validation de votre formulaire échoué.',
			'FormValidOk': 'La validation de votre formulaire a été accepté.',
			'FormValidOkTxt': 'Préparation de votre portail.',
			'PassMismatch': 'Les mots de passe ne sont pas identiques',
			'CorrErrorPls': 'Veuillez corriger ces erreurs '
		});

		$translateProvider.preferredLanguage('en');
	}]);

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