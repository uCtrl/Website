# µCtrl Website
============================

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
* Angular
* Bootstrap
* Font Awesome
* jQuery
* jQuery.ScrollTo
* AngularUI Router
* UI Bootstrap
* validator.js
* angular-translate
* Bootstrap-select

## How to test the website
1. Install nodejs
2. Clone this repository
3. Run `npm install`
3. Run `npm start`

## Live refresh
When running `npm start` or `grunt dev`, you have a file watcher that run beside of the express server. This file watcher give live reload capability.

To activate it, you need to have LiveReload extension install and started on your web browser. To install it, go [here](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

## Configure the FTP deployment
To configure the FTP deployment, you need to create a file on the project root call *serverConf.json*.

This file must contain at lest these information:
``
{
	"host": "server.com",
	"port": 21,
	"authKey": {
		"username": "username1",
		"password": "password1"
	}
}
``
