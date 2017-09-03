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

						'test/SpecRunner.html',
						
						'app/views/_*/*.controller?(.spec).js',
						'app/partials/_*/*.(controller|directive)?(.spec).js',
						'app/components/_*/*.(controller|component|directive)?(.spec).js',
						
						'app/views/_*/view-*.html',
						'app/partials/_*/template-*.html',
						'app/components/_*/template-*.html',
						
						'app/core/*.js',
						'app/services/**/**/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: [ 'app/' ],
						directory: false,
						routes: {
							'/node_modules': 'node_modules',
							'/bower_components': 'bower_components',
							'/test': 'test',
							'/karma.conf.js': 'karma.conf.js'
						},
						middleware: _historyApiFallback()
					},
					open: !true,
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
    // task :: @see https://www.npmjs.com/package/grunt-contrib-concat
    ,concat: {
      top: {
        src: [
          './bower_components/angular/angular.min.js',
          './bower_components/angular-route/angular-route.min.js',
          './bower_components/angular-resource/angular-resource.min.js',
          './bower_components/angular-animate/angular-animate.min.js',
          './bower_components/angular-aria/angular-aria.min.js',
          './bower_components/angular-messages/angular-messages.min.js',
          './bower_components/angular-material/angular-material.min.js',
          './app/assets/scripts/youtube-iframe_api.js',
          './bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js'
        ],
        dest: 'demo/top.js'
      },
      bottom: {
        src: [
          './bower_components/firebase/firebase.js',
          './app/assets/scripts/firebase-initialize-app.js',
          './app/core/app.module.js',
          './app/core/app.config.js',
          './app/services/OnTheAirUtils/OnTheAirUtils.service.js',
          './app/services/TMDb/TMDb.module.js',
          './app/services/TMDb/TMDb.constants.js',
          './app/services/TMDb/TMDb.utils.js',
          './app/services/TMDb/TMDb.config.js',
          './app/services/TMDb/TMDb.interceptor.js',
          './app/services/TMDb/TV/TMDb.TV.module.js',
          './app/services/TMDb/TV/TMDb.TV.service.js',
          './app/services/TMDb/Search/TMDb.Search.module.js',
          './app/services/TMDb/Search/TMDb.Search.service.js',
          './app/services/TMDb/Discover/TMDb.Discover.module.js',
          './app/services/TMDb/Discover/TMDb.Discover.service.js',
          './app/services/TMDb/Networks/TMDb.Networks.module.js',
          './app/services/TMDb/Networks/TMDb.Networks.service.js',
          './app/services/OnTheAirFirebase/OnTheAirFirebase.module.js',
          './app/services/OnTheAirFirebase/OnTheAirFirebase.config.js',
          './app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.module.js',
          './app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.service.js',
          './app/services/OnTheAirFirebase/Database/OnTheAirFirebase.Database.module.js',
          './app/services/OnTheAirFirebase/Database/OnTheAirFirebase.Database.service.js',
          './app/services/OnTheAirFirebase/User/OnTheAirFirebase.User.module.js',
          './app/services/OnTheAirFirebase/User/OnTheAirFirebase.User.service.js',
          './app/partials/_header/header.directive.js',
          './app/partials/_header/header.controller.js',
          './app/components/_search/search.component.js',
          './app/components/_search/search.controller.js',
          './app/components/_password-repeat/password-repeat.directive.js',
          './app/views/_home/home.controller.js',
          './app/views/_detail/detail.controller.js',
          './app/views/_networks/networks.controller.js',
          './app/views/_welcome/welcome.controller.js',
          './app/views/_profile/profile.controller.js'
        ],
        dest: 'demo/bottom.js'
      }
    }
    // task :: @see https://www.npmjs.com/package/grunt-contrib-uglify
    ,uglify: {
      all: {
        options: {
          mangle: false
        },
        files: {
          './demo/top.js': './demo/top.js',
          './demo/bottom.js': './demo/bottom.js'
        }
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

	// register "default" development task for grunt
	grunt.registerTask( 'default', function() {
		grunt.task.run( 'karma:unit_bg', 'browserSync:dev', 'watch' );
	} );	

	// register "test" task for grunt
	grunt.registerTask( 'test', function() {
		grunt.task.run( 'karma:unit' );
	} );

}; // end :: module.exports