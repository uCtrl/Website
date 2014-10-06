module.exports = function(grunt) {

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
			'updateLibs': {
				cmd: 'clean-bower-installer',
				args: [
					'--update'
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

	// Task(s).
	grunt.registerTask('default', ['dev']);

	grunt.registerTask('dev', ['run:installLibs', 'less:development', 'concurrent:express']);

	grunt.registerTask('prod', ['run:updateLibs', 'less:production', 'run:express']);

	grunt.registerTask('deploy', ['run:updateLibs', 'less:production', 'ftp-deploy:build']);
};