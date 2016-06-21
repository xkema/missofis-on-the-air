// almighty grunt wrapper (missofis on the air)
module.exports = function( grunt ) {

	// enable refreshing pages via middleware @production (requires server configuration)
	// @see https://github.com/bripkens/connect-history-api-fallback
	var _historyApiFallback = require( 'connect-history-api-fallback' );

	// project config.
	grunt.initConfig( {

		// read package file
		pkg: grunt.file.readJSON( 'package.json' )

		/*
		----------------------------------------------------------------
		DEVEVELOPMENT
		----------------------------------------------------------------
		*/

		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		,watch: {			
			configFiles: {
				files: [ 'Gruntfile.js', 'karma.conf.js' ],
				options: {
					reload: true
				}
			}
		}
		// task :: @see http://www.browsersync.io/docs/grunt/
		,browserSync: {
			dev: {
				bsFiles: {
					src: [
						'app/index.html',
						'app/views/_*/*.controller?(.spec).js',
						'app/views/_*/view-*.html',
						'app/core/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: [ 'app/' ],
						directory: false,
						routes: {
							'/bower_components': 'bower_components',
							'/test': 'test'
						},
						middleware: _historyApiFallback()
					},
					open: true,
					browser: [ 'chrome' ], // strangely opens in chrome canary :)
				}
			}

		}
		// task :: @see https://www.npmjs.com/package/grunt-karma
		,karma: {
			unit: {
				configFile: 'karma.conf.js'
			},
			unit_bg: {
				configFile: 'karma.conf.js',
				background: true
			}
		}

		/*
		----------------------------------------------------------------
		BUILD
		----------------------------------------------------------------
		*/

	} );

	// load modules (dev)
	grunt.loadNpmTasks( 'grunt-browser-sync' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-karma' );
	// load modules (build)

	// register "default" development task for grunt
	grunt.registerTask( 'default', function() {
		grunt.task.run( 'karma:unit_bg', 'browserSync:dev', 'watch' );
	} );	

	// register "test" task for grunt
	grunt.registerTask( 'test', function() {
		grunt.task.run( 'karma:unit' );
	} );

}; // end :: module.exports