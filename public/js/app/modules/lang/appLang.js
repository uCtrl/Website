'use strict';
angular.module('app').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		/*Home 2*/
		"banner1": "Control your house",
		"banner2": "Easily",
		"aboutTitle": "is a home automation system that works magically",
		"aboutTxt1": "connects to any of your home devices - your power outlets, your lights, your TV, your door locks - and allows you to control them with your computer or your phone",
		"aboutTxt2": "Or automatically",
		"demoTitle": "It Works With You",
		"demoTxt1": "Using",
		"demoTxt2": "Scenarios",
		"demoTxt3": ", your entire house can be configured according to your life events",
		"demoBt1": "At Home",
		"demoBt2": "At Work",
		"demoBt3": "On Vacation",
		"itWorkTitle": "It Works Automatically",
		"itWorkTxt1": "Don't want to spend time configuring",
		"itWorkTxt2": "Let μCtrl do it",
		"itWorkTxt3": "Let's say you come home every week day at 4 PM and turn on the lights. μCtrl will learn it, and will automatically turn the lights on at 4 Pm",
		"itWorkTxt4": "No need to say it. Just do it",
		"itWorkBt1": "Smart",
		"itWorkBt2": "Green",
		"itWorkBt3": "Secure",
		"compatibilityTitle": "It's Compatible",
		"compatibilityTxt": "It works with any device you may have. Or want",
		"easyTitle": "It's Easy To Use",
		"easyControl": "Control",
		"easyMonitor": "Monitor",
		"easyConfigure": "Configure",
		"easySimple": "One simple app",
		"easyDeskC": "The desktop app is compatible with:",
		"easyModC": "The mobile app is compatible with:",
		"openTechTitle": "It's Entirely Open",
		"openTechTxt1": "From the",
		"openTechTxt2": "hardware design",
		"openTechTxt3": "to the",
		"openTechTxt4": "source code",
		"openTechTxt5": ", everything we do is free to explore",
		"openTechGitH": "Check us out on",
		"openTechJIRA": "Follow us on",
		"openTechConf": "Read about us on",
		"openTechTxt6": "Also, everyone can help us and",
		"openTechTxt7": "contribute",
		"jumpTitle": "Ready To Jump In",
		"jumpTxt": "Pack your home with the smartest home automation system available",
		"jumpBtn": "Get Started",
		"followUs": "Follow Us",
		'Link': 'Site Map',

		/*Home*/
		'About': 'About',
		'Team': 'Team',
		'Download': 'Download',
		'SourceCode': 'Source code',
		'ForkGithub': 'Fork us on Github',
		'SingIn': 'Log in',
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

		/*Modal*/
		'ModalLoginPortal': 'Login to your portal',
		'ModalRegisterPortal': 'Register to the µCtrl portal',
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
		/*Home 2*/
		"banner1": "Contrôlez votre maison",
		"banner2": "Facilement",
		"aboutTitle": "est un système domotique qui fonctionne comme par magie",
		"aboutTxt1": "se connecte à n'importe lequel de vos appareils domestiques - vos prises de courant , vos lumières , votre téléviseur , vos serrures de porte - et vous permet de les contrôler avec votre ordinateur ou votre téléphone",
		"aboutTxt2": "Ou automatiquement",
		"demoTitle": "Il Travaille Avec Vous",
		"demoTxt1": "En utilisant les",
		"demoTxt2": "Scénario",
		"demoTxt3": "l'ensemble de votre maison peut être configuré en fonction de vos événements de vie",
		"demoBt1": "Chez Soi",
		"demoBt2": "Au Travail",
		"demoBt3": "En Vacances",
		"itWorkTitle": "Il fonctionne du premier coup",
		"itWorkTxt1": "Vous ne souhaitez pas passer votre temps a configurer",
		"itWorkTxt2": "Laissez μCtrl le faire",
		"itWorkTxt3": "Disons que vous venez à la maison tous les jours de la semaine à 16 heures et allumez les lumières. μCtrl l'apprendra, et fera automatiquement allumer les lumières à 16 heures",
		"itWorkTxt4": "Pas besoin de le dire. Faite-le tout simplement",
		"itWorkBt1": "Intelligent",
		"itWorkBt2": "Vert",
		"itWorkBt3": "Sécuritaire",
		"compatibilityTitle": "Compatible Avec",
		"compatibilityTxt": "Il fonctionne avec n'importe quel appareil que vous pourriez avoir. Ou vous voulez",
		"easyTitle": "Facile a utiliser",
		"easyControl": "Contrôler",
		"easyMonitor": "Surveiller",
		"easyConfigure": "Configurer",
		"easySimple": "Avec une simple application",
		"easyDeskC": "L'application bureau est disponible pour :",
		"easyModC": "L'application mobile est disponible pour :",
		"openTechTitle": "Entièrement open source",
		"openTechTxt1": "Des",
		"openTechTxt2": "plans matériels",
		"openTechTxt3": "au",
		"openTechTxt4": "code source",
		"openTechTxt5": ", tout ce que l'on conçoit est ouvert à l'exploration.",
		"openTechGitH": "Retrouvez-nous sur",
		"openTechJIRA": "Suivez-nous sur",
		"openTechConf": "Lisez-nous sur",
		"openTechTxt6": "Aussi, tout le monde peut nous aider et",
		"openTechTxt7": "contribuer",
		"jumpTitle": "Prêt À Commencer",
		"jumpTxt": "Amméliorez votre maison avec le plus intelligent système de domotique disponible.",
		"jumpBtn": "Commencez",
		"followUs": "Pour nous suivre",
		'Link': 'Site Map',


		/*Home*/
		'About': 'À propos',
		'Team': 'Équipe',
		'Download': 'Téléchargement',
		'SourceCode': 'Code source',
		'ForkGithub': 'Suivez-nous sur Github',
		'SingIn': 'Connexion',
		'GoToPortal': 'Aller au portail',
		'Portal': 'Portail',
		'Home': 'Accueil',
		'FollowUs': 'Suivez-nous',
		'AboutP1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla metus. Nullam dapibus velit nec dignissim molestie. Suspendisse a ex ac diam auctor convallis. Nullam vitae convallis ex, ut dapibus enim. Proin tempor velit justo, lacinia varius sem ultrices non. Proin non fermentum lorem, sit amet accumsan arcu. Curabitur hendrerit nulla eu mi auctor blandit. Vivamus vitae lectus et ante porttitor eleifend vel vitae leo. Maecenas mollis turpis sit amet arcu sagittis rutrum vel a quam. In magna purus, blandit quis neque sit amet, mattis vehicula sapien. Vivamus feugiat, nisi vitae pellentesque ullamcorper, urna lectus convallis leo, et cursus tellus odio eu ligula. Vivamus sed vestibulum urna. Aliquam semper massa gravida, ultricies quam ornare, accumsan dui.',
		'AboutP2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est.',
		'Software': 'Logiciel',
		'Hardware': 'Matériel',
		'SoftwareTeamDesc': 'Voici la liste des membres de l\'équipe logiciel.',
		'HardwareTeamDesc': 'Voici la liste des membres de l\'équipe matériel.',
		'Name': 'Nom ',
		'Post': 'Poste ',
		'DownloadText1': 'Tous ces produits sont sous la licence LGPL. Il est optant que vous connaissiez les requis d\'utilisation ou de programmation sous cette licence. Les requis de la LGPL sont ',
		'DownloadText2': 'disponible ici',
		'DownloadWhyTitle': 'Pourquoi utiliser la licence LGPL',
		'DownloadWhyText1': 'Nous utilisons cette licence, car nous utilisons les produits "open source" de Qt, soit leurs librairies et leurs outils. Celons les conditions d\'utilisation, il nous faut donc garder la licence LGPL.',
		'DownloadWhyText2': 'Plus d\'information à propos des licences sous Qt est disponible ici.',
		'DesktopApp': 'Application Bureau',
		'PlayStoreText': 'Disponible directement sur le ',
		'AppStoreText': 'Disponible directement sur l\'',
		'SourceCodeText1': 'Notre code source est disponible sur ',
		'SourceCodeText2': 'Sed non imperdiet ex. Vestibulum ligula tellus, pretium quis leo ut, efficitur pharetra sapien. Quisque eu eros lorem. Nunc dictum arcu in mi eleifend, vel ultricies turpis ornare. Proin augue ligula, posuere vitae volutpat et, cursus a metus. Ut a vulputate odio. Nulla eu orci tellus. Duis ultrices elementum felis, quis accumsan ex laoreet dignissim. Praesent vitae tempor ligula, nec consequat est. ',

		/*Modal*/
		'ModalLoginPortal': 'Connectez-vous à votre portail',
		'ModalRegisterPortal': 'Inscrivez-vous au portail μCtrl',
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
		'FormValidOk': 'La validation de votre formulaire a été acceptée.',
		'FormValidOkTxt': 'Préparation de votre portail.',
		'PassMismatch': 'Les mots de passe ne sont pas identiques',
		'CorrErrorPls': 'Veuillez corriger ces erreurs '
	});

	$translateProvider.preferredLanguage('en');
}]);