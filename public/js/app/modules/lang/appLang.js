'use strict';

angular.module('app').config(["$translateProvider", function ($translateProvider) {
	$translateProvider.translations("en", {
		/*Header*/
		"logIn": "Log In",
		"goToPortal": "Go To Portal",
		"home": "Home",
		"developers": "Developers",
		"features": "Features",
		"about": "About",
		"getStarted": "Get Started",
		"blog": "Blog",

		/*Footer*/
		"footerLink": "Site Map",
		"footerDescription1": "µCtrl is a home automation project developed by a team of 20 students in computer engineering and electrical engineering at ",
		"footerDescription2": "Université de Sherbrooke",
		"footerDescription3": "It is entirely non-profit, open and free to use",
		"footerKIT": "Keep In Touch",
		"footerSubscribe": "Subscribe to our newsletter:",
		"footerLikeF": "Like us on Facebook",
		"footerLikeT": "Follow us on Twitter",
		"footerLikeG": "Fork us on GitHub",
		"footerContact": "Contact Us",
		"footerLicense": "All Rights Reserved",

		/*Landing*/
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
		"demoTvOn": "TV is ON",
		"itWorkTitle": "It Works Automatically",
		"itWorkTxt1": "Don't want to spend time configuring",
		"itWorkTxt2": "Let μCtrl do it",
		"itWorkTxt3": "Let's say you come home every week day at 4 PM and turn on the lights. μCtrl will learn it, and will automatically turn the lights on at 4 Pm",
		"itWorkTxt4": "No need to say it. Just do it",
		"itEchoTitle": "It's Environmentally Friendly",
		"itEchoTxt1": "With power consumption calculation, you can monitor how much your electronic devices are using, and set a threshold to prevent over-consumption",
		"itEchoTxt2": "Support a green world",
		"itSecureTitle": "It Helps Your Security",
		"itSecureTxt1": "Using lock devices, you can remotely control you door locks and monitor them remotely",
		"itSecureTxt2": "You can always know if your home is locked and you are notified whenever this changes",
		"itSecureTxt3": "Such a relief",
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

		/*Modal*/
		"ModalLoginPortal": "Login to your portal",
		"ModalRegisterPortal": "Register to the µCtrl portal",
		"Close": "Close",
		"Username": "Username",
		"Password": "Password",
		"PasswordConf": "Password confirmation",
		"Register": "Register",
		"FirstName": "First name",
		"LastName": "Last name",
		"Register&Login": "Register and login",
		"ModalRegisterInfo1": "This form allow you to register to the µCtrl web portal service.",
		"ModalRegisterInfo2": "From this portal, you will be able to connect each of your devices and then control them from anywhere!",
		"FormValidFail": "Form validation failed.",
		"FormValidOk": "Form validation pass.",
		"FormValidOkTxt": "Waiting for the portal to be ready.",
		"PassMismatch": "Password mismatch",
		"CorrErrorPls": "Please correct theses errors"
	});

	$translateProvider.translations("fr", {
		/*Header*/
		"logIn": "Connexion",
		"goToPortal": "Aller au Portail",
		"home": "Accueil",
		"developers": "Développeurs",
		"features": "Fonctionnalités",
		"about": "À propos",
		"getStarted": "Démarrer",
		"blog": "Blogue",

		/*Footer*/
		"footerLink": "Site Map",
		"footerDescription1": "μCtrl est un projet de domotique développé par une équipe de 20 étudiants en génie informatique et en génie électrique à l'",
		"footerDescription2": "Université de Sherbrooke",
		"footerDescription3": "Ce projet est à but non lucratif, ouvert et libre d'utilisation",
		"footerKIT": "Restez en contact",
		"footerSubscribe": "Abonnez-vous au bulletin d'information :",
		"footerLikeF": "Devenez Fan sur Facebook",
		"footerLikeT": "Suivez-nous sur Twitter",
		"footerLikeG": "Participez à notre GitHub",
		"footerContact": "Contactez-Nous",
		"footerLicense": "Tous Droits Réservés",

		/*Landing*/
		"banner1": "Contrôlez votre maison",
		"banner2": "Facilement",
		"aboutTitle": "est un système domotique qui fonctionne comme par magie",
		"aboutTxt1": "se connecte à n'importe lequel de vos appareils domestiques - vos prises de courant, vos lumières, votre téléviseur, vos serrures de porte - et vous permet de les contrôler avec votre ordinateur ou votre téléphone",
		"aboutTxt2": "Ou automatiquement",
		"demoTitle": "Il Travaille Avec Vous",
		"demoTxt1": "En utilisant les",
		"demoTxt2": "Scénario,",
		"demoTxt3": "l'ensemble de votre maison peut être configuré en fonction de vos événements de vie",
		"demoBt1": "Chez Soi",
		"demoBt2": "Au Travail",
		"demoBt3": "En Vacances",
		"itWorkTitle": "Il fonctionne du premier coup",
		"itWorkTxt1": "Vous ne souhaitez pas passer votre temps à configurer",
		"itWorkTxt2": "Laissez μCtrl le faire",
		"itWorkTxt3": "Disons que vous venez à la maison tous les jours de la semaine à 16 heures et allumez les lumières. μCtrl l'apprendra, et fera automatiquement allumer les lumières à 16 heures",
		"itWorkTxt4": "Pas besoin de le dire. Faites-le tout simplement",
		"itEchoTitle": "Il Est Échologique",
		"itEchoTxt1": "A l'aide des données de consommation, vous pourrez contrôler quand vos appareils fonctionneront affin de limiter leur consommation",
		"itEchoTxt2": "Soutenez un monde vert",
		"itSecureTitle": "Il Aide Votre Sécurité",
		"itSecureTxt1": "En utilisant \"lock device\", vous pouvez contrôler à distance vous serrures de porte et même les surveiller",
		"itSecureTxt2": "Vous pouvez toujours savoir si votre maison est verrouillé et vous êtes averti chaque fois que cela change",
		"itSecureTxt3": "Un vrai soulagement",
		"itWorkBt1": "Intelligent",
		"itWorkBt2": "Vert",
		"itWorkBt3": "Sécuritaire",
		"compatibilityTitle": "Compatible Avec",
		"compatibilityTxt": "Il fonctionne avec n'importe quel appareil que vous pourriez avoir. Ou vous voulez",
		"easyTitle": "Facile à utiliser",
		"easyControl": "Contrôler",
		"easyMonitor": "Surveiller",
		"easyConfigure": "Configurer",
		"easySimple": "Avec une simple application",
		"easyDeskC": "L'application bureau est disponible pour :",
		"easyModC": "L'application mobile est disponible pour :",
		"openTechTitle": "Entièrement Open Source",
		"openTechTxt1": "Des",
		"openTechTxt2": "plans matériels",
		"openTechTxt3": "au",
		"openTechTxt4": "code source",
		"openTechTxt5": ", tout ce que l'on conçoit est ouvert à l'exploration",
		"openTechGitH": "Retrouvez-nous sur",
		"openTechJIRA": "Suivez-nous sur",
		"openTechConf": "Lisez-nous sur",
		"openTechTxt6": "Aussi, tout le monde peut nous aider et",
		"openTechTxt7": "contribuer",
		"jumpTitle": "Prêt À Commencer",
		"jumpTxt": "Améliorez votre maison avec le plus intelligent système de domotique disponible",
		"jumpBtn": "Commencez",
		"followUs": "Pour nous suivre",

		/*Modal*/
		"ModalLoginPortal": "Connectez-vous à votre portail",
		"ModalRegisterPortal": "Inscrivez-vous au portail μCtrl",
		"Close": "Fermer",
		"Username": "Nom d'utilisateur",
		"Password": "Mot de passe",
		"PasswordConf": "Confirmation du mot de passe",
		"Register": "S'inscrire",
		"FirstName": "Prénom",
		"LastName": "Nom de famille",
		"Register&Login": "Inscription et connexion",
		"ModalRegisterInfo1": "Ce formulaire vous offre la possibilité de s'inscrire au portail web de µCtrl.",
		"ModalRegisterInfo2": "À partir de ce portail, vous serez capable d'y ajouter chacun de vos dispositifs et d'y accéder par la suite de n'importe où!",
		"FormValidFail": "La validation de votre formulaire échoué.",
		"FormValidOk": "La validation de votre formulaire a été acceptée.",
		"FormValidOkTxt": "Préparation de votre portail.",
		"PassMismatch": "Les mots de passe ne sont pas identiques",
		"CorrErrorPls": "Veuillez corriger ces erreurs "
	});

	$translateProvider.preferredLanguage("en");
}]);