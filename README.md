# µCtrl Website
This is the website for the µCtrl project.

## Technologies used
* [LESS](http://lesscss.org/)
* [BOWER](http://bower.io/)
* [CLEAN-BOWER-INSTALLER](https://github.com/ofrogon/cleanBowerInstaller)
* [EXPRESS](http://expressjs.com/)
* [GRUNT](http://gruntjs.com/)
* [GRUNT-CONTRIB-LESS](https://github.com/gruntjs/grunt-contrib-less)
* [GRUNT-CONTRIB-WATCH](https://github.com/gruntjs/grunt-contrib-watch)
* [GRUNT-CONCURRENT](https://github.com/sindresorhus/grunt-concurrent)
* [GRUNT-FTP-DEPLOY](https://github.com/zonak/grunt-ftp-deploy)
* [GRUNT-RUN](https://github.com/spenceralger/grunt-run)
* [OPEN](https://github.com/pwnall/node-open)

## Third party components
* [Angular](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* [jQuery](http://jquery.com/)
* [jQuery.ScrollTo](https://github.com/flesler/jquery.scrollTo)
* [AngularUI Router](https://github.com/angular-ui/ui-router)
* [UI Bootstrap](http://angular-ui.github.io/bootstrap/)
* [validator.js](https://github.com/chriso/validator.js)
* [angular-translate](http://angular-translate.github.io/)
* [Bootstrap-select](http://silviomoreto.github.io/bootstrap-select/)

## How to test the website
1. Install nodejs
2. Clone this repository
3. Run `npm install`
3. Run `npm start` or ON WINDOWS `grunt dev`

## Live refresh
When running `npm start` or `grunt dev`, you have a file watcher that run beside of the express server. This file watcher give live reload capability.

To activate it, you need to have LiveReload extension install and started on your web browser. To install it, go [here](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

## Configure the FTP deployment
To configure the FTP deployment, you need to create a file on the project root call *serverConf.json*.

This file must contain at lest these information:
```
{
	"host": "server.com",
	"port": 21,
	"authKey": {
		"username": "username1",
		"password": "password1"
	}
}
```

## Windows problem solving
On windows, you can get views.error depending of the way *git bash* was install.

To correct the views.error, you will have to install *git-scm* by choosing the third option when the installer asking for PATH environment.

![Select the third choice in the PATH environment choice.](http://misheska.com/images/wingitunixtools.png)