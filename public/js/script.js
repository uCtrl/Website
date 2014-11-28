/* Notes : This is slower in dev, but is faster in prod*/

document.write(
	'<script src="js/tool.js"></script>' + '\n' +
	'<!-- Angular app-->' + '\n' +
	'<script src="js/app/app.js"></script>' + '\n' +
	'<script src="js/app/modules/lang/appLang.js"></script>' + '\n' +
	'<script src="js/app/modules/team/team.js"></script>' + '\n' +
	'<script src="js/app/modules/team/controller/teamController.js"></script>' + '\n' +
	'<script src="js/app/modules/login/login.js"></script>' + '\n' +
	'<script src="js/app/modules/login/controller/loginController.js"></script>' + '\n' +
	'<script src="js/app/modules/demo/demo.js"></script>' + '\n' +
	'<script src="js/app/modules/demo/controller/demoController.js"></script>'
);