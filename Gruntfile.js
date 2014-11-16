module.exports = function(grunt) {
	var os = require('os');
	var devAction, prodAction;

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				files: {
					"public/css/style.css": "public/css/less/style.less"
				}
			},
			production: {
				options: {
					cleancss: true,
					ieCompat: true
				},
				files: {
					"public/css/style.css": "public/css/less/style.less"
				}
			}
		},
		watch: {
			css: {
				files: 'public/css/less/**/*.less',
				tasks: ['less:development'],
				options: {
					livereload: true,
					spawn: false
				}
			}
		},
		concurrent: {
			express: {
				tasks: ['run:express', 'watch:css'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		'ftp-deploy': {
			build: {
				auth: grunt.file.readJSON('serverConf.json'),
				src: 'public',
				dest: '.',
				exclusions: ['**/*.less']
			}
		},
		run: {
			installLibs: {
				cmd: 'clean-bower-installer',
				args: [
					'--install'
				]
			},
			winInstallLibs: {
				cmd: 'sh',
				args: [
					'clean-bower-installer',
					'--install'
				]
			},
			'updateLibs': {
				cmd: 'clean-bower-installer',
				args: [
					'--update'
				]
			},
			winUpdateLibs: {
				cmd: 'sh',
				args: [
					'clean-bower-installer',
					'--update'
				]
			},
			'updateLibsProd': {
				cmd: 'clean-bower-installer',
				args: [
					'--update',
					'--renameMin'
				]
			},
			winUpdateLibsProd: {
				cmd: 'sh',
				args: [
					'clean-bower-installer',
					'--update',
					'--renameMin'
				]
			},
			'express': {
				cmd: 'node',
				args: [
					'devServer.js'
				]
			}
		}
	});

	// Load the plugin that provides the "watch" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	// Load the plugin that provides the "concurrent" task.
	grunt.loadNpmTasks('grunt-concurrent');
	// Load the plugin that provides the "ftp-deploy" task.
	grunt.loadNpmTasks('grunt-ftp-deploy');
	// Load the plugin that provides the "run" task.
	grunt.loadNpmTasks('grunt-run');

	// Handle spacial way to call grunt on windows
	grunt.registerTask('default', ['dev']);
	if (os.type() == 'Windows_NT') {
		devAction = ['run:winInstallLibs', 'less:development', 'concurrent:express'];
		prodAction = ['run:winUpdateLibsProd', 'less:production', 'run:express'];
	} else {
		devAction = ['run:installLibs', 'less:development', 'concurrent:express'];
		prodAction = ['run:updateLibsProd', 'less:production', 'run:express'];
	}

	// Task(s).
	grunt.registerTask('default', ['dev']);

	grunt.registerTask('dev', devAction);

	grunt.registerTask('prod', prodAction);

	grunt.registerTask('deploy', ['run:updateLibs', 'less:production', 'ftp-deploy:build']);
};