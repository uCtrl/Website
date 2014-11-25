module.exports = function(grunt) {
	var os = require('os');
	var devAction, prodAction;

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concurrent: {
			express: {
				tasks: ['run:express', 'watch:css'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'public/',
				src: ['data/**', 'fonts/**', 'img/**', 'favicon.ico'],
				dest: 'build/prod'
			},
			getMap: {
				files: [
					{'build/prod/js/vendor/jquery.min.map': 'bower_components/jquery/dist/jquery.min.map'},
					{'build/prod/js/vendor/angular.min.js.map': 'bower_components/angular/angular.min.js.map'},
					{'build/prod/js/vendor/bootstrap-select.js.map': 'bower_components/bootstrap-select/dist/js/bootstrap-select.js.map'}
				]
			}
		},
		htmlmin: {
			prod: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: 'public/',
				src: ['index.html', 'views/**/*.html'],
				dest: 'build/prod'
			}
		},
		less: {
			dev: {
				files: {
					"public/css/style.css": "public/css/less/style.less"
				}
			},
			prod: {
				options: {
					dumpLineNumbers: 'comments',
					compress: true,
					ieCompat: true
				},
				files: {
					"build/prod/css/style.css": "public/css/less/style.less"
				}
			}
		},
		uglify: {
			prod: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				expand: true,
				cwd: 'public/',
				src: ['js/tool.js', 'js/app/**/*.js'],
				dest: 'build/prod'
			}
		},
		watch: {
			css: {
				files: 'public/css/less/**/*.less',
				tasks: ['less:dev'],
				options: {
					livereload: true,
					spawn: false
				}
			}
		},
		'ftp-deploy': {
			build: {
				auth: grunt.file.readJSON('serverConf.json'),
				src: 'build/prod',
				dest: '.'
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
			,
			'expressProd': {
				cmd: 'node',
				args: [
					'devServer.js',
					'prod'
				]
			}
		}
	});

	// Load the plugin that provides the "concurrent" task.
	grunt.loadNpmTasks('grunt-concurrent');
	// Load the plugin that provides file copy task.
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Load the plugin that provides the "html minimisation" task.
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	// Load the plugin that provides the "javascript minimisation" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load the plugin that provides the "watch" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Load the plugin that provides the "ftp-deploy" task.
	grunt.loadNpmTasks('grunt-ftp-deploy');
	// Load the plugin that provides the "run" task.
	grunt.loadNpmTasks('grunt-run');

	// Handle spacial way to call grunt on windows
	grunt.registerTask('default', ['dev']);
	if (os.type() == 'Windows_NT') {
		devAction = ['run:winInstallLibs', 'less:dev', 'concurrent:express'];
		prodAction = 'run:winUpdateLibsProd'
	} else {
		devAction = ['run:installLibs', 'less:dev', 'concurrent:express'];
		prodAction = 'run:updateLibsProd';
	}

	// Task(s).
	grunt.registerTask('default', ['dev']);

	grunt.registerTask('dev', devAction);

	grunt.registerTask('prod', ['buildProd', 'run:expressProd']);

	grunt.registerTask('deploy', ['buildProd', 'ftp-deploy:build']);
	
	grunt.registerTask('buildProd', [prodAction, 'copy:main', 'copy:getMap', 'htmlmin:prod', 'less:prod', 'uglify:prod']);
};