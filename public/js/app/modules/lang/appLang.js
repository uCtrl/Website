'use strict';

angular.module('app').config(["$translateProvider", function ($translateProvider) {
	$translateProvider.translations("en", {
		"lang": "en",

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
		"itWorkTxt2": "Let <strong>μCtrl</strong> do it.",
		"itWorkTxt3": "Let's say you come home every week day at 4 PM and turn on the lights. <strong>μCtrl</strong> will learn it, and will automatically turn the lights on at 4 PM.",
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
		"openTechTxt5": "everything we do is free to explore",
		"openTechGitH": "Check us out on",
		"openTechJIRA": "Follow us on",
		"openTechConf": "Read about us on",
		"openTechTxt6": "Also, everyone can help us and",
		"openTechTxt7": "contribute",
		"jumpTitle": "Ready To Jump In",
		"jumpTxt": "Pack your home with the smartest home automation system available",
		"jumpBtn": "Get Started",
		"followUs": "Follow Us",

		/*About us*/
		"aboutUsTitle1": "was created by a team of students from ",
		"aboutUsTitle2": "in Québec",
		"aboutUsP1T1": "is the result of 8 months of research and development, that took place within the scope of an",
		"aboutUsP1T2": "end-of-degree project",
		"aboutUsP1T3": "in Computer Engineering and Electrical Engineering",
		"aboutUsP2T1": "Supervised by",
		"aboutUsP2T2": "3 professors",
		"aboutUsP2T3": "the team of",
		"aboutUsP2T4": "19 students",
		"aboutUsP2T5": "worked days and night to build the most intelligent home automation system that exist",
		"meetTeamTitle": "Meet The Team",
		"meetTeamText1": "The",
		"meetTeamText2": "system was developed by 2 groups:",
		"meetTeamText3": "Software",
		"meetTeamText4": "and",
		"meetTeamText5": "Hardware",
		"meetTeamText6": "development",

		/*Developers*/
		"wantToExtendTitle": "Want To Extend µCtrl",
		"wantToExtendSubTitle1": "Whether you want to",
		"wantToExtendSubTitle2": "contribute",
		"wantToExtendSubTitle3": "or you're simply",
		"wantToExtendSubTitle4": "curious",
		"wantToExtendT1": "Browse the source code",
		"wantToExtendT2": "Explore the source map",
		"wantToExtendT3": "Read the documentation",
		"doesItWkTitle": "How Does It Work",
		"doesItWkSubTitle1": "The",
		"doesItWkSubTitle2": "system, in a nutshell",
		"doesItWkT1": "works over",
		"doesItWkT2": "power-line communication",
		"doesItWkT3": "(PLC) to work with its own devices",
		"doesItWkT4": "It also works with",
		"doesItWkT5": "using its own server, with a custom layer called",
		"doesItWkT6": "That way",
		"doesItWkT7": "everything",
		"doesItWkT8": "is connected",
		"doesItWkT9": "all the time",
		"doesItWkT10": "and",
		"doesItWkT11": "everywhere",
		"devJumpTitle": "Want To Jump In Directly",

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
		"CorrErrorPls": "Please correct theses errors",

		/*Errors*/
		"err400T": "Error 400 - Bad Request",
		"err400M": "Bad Request. Your browser sent a request that this server could not understand",
		"err401T": "Error 401 - Unauthorized",
		"err401M": "Authorization Required",
		"err403T": "Error 403 - Forbidden",
		"err403M": "Forbidden: You don't have permission to access this file on this server",
		"err404T": "Error 404 - Not Found",
		"err404M": "The requested URL was not found on this server",
		"err405T": "Error 405 - Method Not Allowed",
		"err405M": "A request was made of a resource using a request method not supported by that resource",
		"err406T": "Error 406 - Not Acceptable",
		"err406M": "The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request",
		"err500T": "Error 500 - Internal Server Error",
		"err500M": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable"
	});

	$translateProvider.translations("fr", {
		"lang": "fr",

		/*Header*/
		"logIn": "Connexion",
		"goToPortal": "Aller au portail",
		"home": "Accueil",
		"developers": "Développeurs",
		"features": "Fonctionnalités",
		"about": "À propos",
		"getStarted": "Démarrer",
		"blog": "Blogue",

		/*Footer*/
		"footerLink": "Plan du site",
		"footerDescription1": "μCtrl est un projet de domotique développé par une équipe de 20 étudiants en génie informatique et en génie électrique à l'",
		"footerDescription2": "Université de Sherbrooke",
		"footerDescription3": "Ce projet est à but non lucratif, ouvert et libre d'utilisation",
		"footerKIT": "Restez en contact",
		"footerSubscribe": "Abonnez-vous au bulletin d'information :",
		"footerLikeF": "Devenez fan sur Facebook",
		"footerLikeT": "Suivez-nous sur Twitter",
		"footerLikeG": "Participez à notre GitHub",
		"footerContact": "Contactez-nous",
		"footerLicense": "Tous droits réservés",

		/*Landing*/
		"banner1": "Contrôlez votre maison",
		"banner2": "Facilement",
		"aboutTitle": "est un système domotique qui fonctionne comme par magie",
		"aboutTxt1": "se connecte à n'importe lequel de vos appareils domestiques - vos prises de courant, vos lumières, votre téléviseur, vos serrures de porte - et vous permet de les contrôler avec votre ordinateur ou votre téléphone",
		"aboutTxt2": "Ou automatiquement",
		"demoTitle": "Il travaille avec vous",
		"demoTxt1": "En utilisant les",
		"demoTxt2": "Scénario,",
		"demoTxt3": "l'ensemble de votre maison peut être configurée en fonction de vos événements de vie",
		"demoBt1": "Chez soi",
		"demoBt2": "Au travail",
		"demoBt3": "En vacances",
		"itWorkTitle": "Il fonctionne automatiquement",
		"itWorkTxt1": "Vous ne souhaitez pas passer votre temps à configurer",
		"itWorkTxt2": "Laissez <strong>μCtrl</strong> le faire.",
		"itWorkTxt3": "Disons que vous venez à la maison tous les jours de la semaine à 16h00 et allumez les lumières. <strong>μCtrl</strong> l'apprendra et fera automatiquement allumer les lumières à 16h00.",
		"itWorkTxt4": "Pas besoin de le dire. Faites-le tout simplement",
		"itEchoTitle": "Il est écologique",
		"itEchoTxt1": "À l'aide des données de consommation, vous pourrez contrôler quand vos appareils fonctionneront affin de limiter leur consommation",
		"itEchoTxt2": "Soutenez un monde vert",
		"itSecureTitle": "Il aide votre sécurité",
		"itSecureTxt1": "En utilisant des dispositifs de verrouillage, vous pouvez contrôler à distance vous serrures de porte et même les surveiller",
		"itSecureTxt2": "Vous pouvez toujours savoir si votre maison est verrouillée et vous serez averti chaque fois que cela change",
		"itSecureTxt3": "Un vrai soulagement",
		"itWorkBt1": "Intelligent",
		"itWorkBt2": "Vert",
		"itWorkBt3": "Sécuritaire",
		"compatibilityTitle": "Il est compatible",
		"compatibilityTxt": "Il fonctionne avec n'importe quel appareil que vous pourriez avoir. Ou vous voulez",
		"easyTitle": "Il est facile à utiliser",
		"easyControl": "Contrôler",
		"easyMonitor": "Surveiller",
		"easyConfigure": "Configurer",
		"easySimple": "Une simple application",
		"easyDeskC": "L'application bureau est disponible pour :",
		"easyModC": "L'application mobile est disponible pour :",
		"openTechTitle": "Il est entièrement ouvert",
		"openTechTxt1": "Des",
		"openTechTxt2": "plans matériels",
		"openTechTxt3": "au",
		"openTechTxt4": "code source",
		"openTechTxt5": "tout ce que l'on conçoit est ouvert à l'exploration",
		"openTechGitH": "Retrouvez-nous sur",
		"openTechJIRA": "Suivez-nous sur",
		"openTechConf": "Lisez-nous sur",
		"openTechTxt6": "Aussi, tout le monde peut nous aider et",
		"openTechTxt7": "contribuer",
		"jumpTitle": "Prêt à commencer",
		"jumpTxt": "Améliorez votre maison avec le plus intelligent système de domotique disponible",
		"jumpBtn": "Commencez",
		"followUs": "Suivez-nous",

		/*About us*/
		"aboutUsTitle1": "a été créé par une équipe de l'",
		"aboutUsTitle2": "au Québec",
		"aboutUsP1T1": "est le résultat de 8 mois de recherche et développement, prenant place dans le cadre d'un",
		"aboutUsP1T2": "projet de fin d'étude",
		"aboutUsP1T3": "en Génie Informatique et en Génie Électrique",
		"aboutUsP2T1": "Supervisé par",
		"aboutUsP2T2": "3 professeurs",
		"aboutUsP2T3": "l'équipe de",
		"aboutUsP2T4": "19 étudiants",
		"aboutUsP2T5": "a travaillé jours et nuits pour concevoir le système d'automatisation le plus intelligent existant",
		"meetTeamTitle": "Découvrez l'équipe",
		"meetTeamText1": "Le système",
		"meetTeamText2": "a été développé par 2 groupes : les équipes",
		"meetTeamText3": "Logiciel",
		"meetTeamText4": "et",
		"meetTeamText5": "Matériel",
		"meetTeamText6": "",

		/*Developers*/
		"wantToExtendTitle": "Prêt À Étendre µCtrl",
		"wantToExtendSubTitle1": "Que vous voulez",
		"wantToExtendSubTitle2": "contribuer",
		"wantToExtendSubTitle3": "ou si vous êtes simplement",
		"wantToExtendSubTitle4": "curieux",
		"wantToExtendT1": "Parcourir le code source",
		"wantToExtendT2": "Explorer le plan des sources",
		"wantToExtendT3": "Lire la documentation",
		"doesItWkTitle": "How Does It Work",
		"doesItWkSubTitle1": "Le système",
		"doesItWkSubTitle2": "en quelques mots",
		"doesItWkT1": "fonctionne par",
		"doesItWkT2": "courants porteurs de ligne",
		"doesItWkT3": "(PLC, en anglais) a fin de communiquer avec ses propres dispositifs",
		"doesItWkT4": "Il est également compatibles",
		"doesItWkT5": "utilisant leurs propres serveurs, à l'aide d'un mudule appelé",
		"doesItWkT6": "Ainsi",
		"doesItWkT7": "tout",
		"doesItWkT8": "est connecté",
		"doesItWkT9": "à tout moment",
		"doesItWkT10": "et",
		"doesItWkT11": "partout",
		"devJumpTitle": "Commencer Maintenant",

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
		"CorrErrorPls": "Veuillez corriger ces erreurs ",

		/*Errors*/
		"err400T": "Erreur 400",
		"err400M": "La syntaxe de la requête est erronée",
		"err401T": "Erreur 401",
		"err401M": "Une authentification est nécessaire pour accéder à la ressource",
		"err403T": "Erreur 403",
		"err403M": "Le serveur a compris la requête, mais refuse de l'exécuter",
		"err404T": "Erreur 404",
		"err404M": "Ressource non trouvée",
		"err405T": "Erreur 405",
		"err405M": "Méthode de requête non autorisée",
		"err406T": "Erreur 406",
		"err406M": "La ressource demandée n'est pas disponible",
		"err500T": "Erreur 500",
		"err500M": "Erreur interne du serveur"
	});

	$translateProvider.preferredLanguage("en");
}]);