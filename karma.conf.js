// karma test wrapper (missofis on the air)
module.exports = function( config ) {

	var _settings = {

		basePath: '',
		autoWatch: true,
		browsers: [ 'PhantomJS' ],
		files: [
			// vendor :: "angular", "angular-route", "angular-resource", "angular-mocks", "firebase"
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-resource/angular-resource.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-messages/angular-messages.min.js',
			'bower_components/angular-material/angular-material.min.js',
			// vendor :: youtube embed scripts
			'app/assets/scripts/youtube-iframe_api.js',
			'bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js',
			// vendor :: angular mocks
			'node_modules/angular-mocks/angular-mocks.js',
			// vendor :: firebase
			'bower_components/firebase/firebase.js',
			// app :: firebase initializer
			'app/assets/scripts/firebase-initialize-app.js',
			// app test :: test helpers
			'test/mock-helpers/mock-helpers.js',
			// app :: main module
			'app/core/app.module.js',
			'app/core/app.config.js',
			// app service :: Utils
			'app/services/OnTheAirUtils/OnTheAirUtils.service.js',
			'app/services/OnTheAirUtils/OnTheAirUtils.service.spec.js',
			// app service :: TMDb module
			'app/services/TMDb/TMDb.module.js',
			'app/services/TMDb/TMDb.config.js',
			'app/services/TMDb/TMDb.constants.js',
			'app/services/TMDb/TMDb.interceptor.js',
			'app/services/TMDb/TMDb.interceptor.spec.js',
			'app/services/TMDb/TMDb.utils.js',
			'app/services/TMDb/TMDb.utils.spec.js',
			// app service :: TMDb TV module
			'app/services/TMDb/TV/TMDb.TV.module.js',
			'app/services/TMDb/TV/TMDb.TV.service.js',
			'app/services/TMDb/TV/TMDb.TV.service.spec.js',
			// app service :: TMDb Search module
			'app/services/TMDb/Search/TMDb.Search.module.js',
			'app/services/TMDb/Search/TMDb.Search.service.js',
			'app/services/TMDb/Search/TMDb.Search.service.spec.js',
			// app service :: Firebase module
			'app/services/OnTheAirFirebase/OnTheAirFirebase.module.js',
			'app/services/OnTheAirFirebase/OnTheAirFirebase.config.js',
			// app service :: Firebase Auth module
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.module.js',
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.service.js',
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.service.spec.js',
			// app service :: Firebase Database module
			'app/services/OnTheAirFirebase/Database/OnTheAirFirebase.Database.module.js',
			'app/services/OnTheAirFirebase/Database/OnTheAirFirebase.Database.service.js',
			'app/services/OnTheAirFirebase/Database/OnTheAirFirebase.Database.service.spec.js',
			// app service :: Firebase User module
			'app/services/OnTheAirFirebase/User/OnTheAirFirebase.User.module.js',
			'app/services/OnTheAirFirebase/User/OnTheAirFirebase.User.service.js',
			'app/services/OnTheAirFirebase/User/OnTheAirFirebase.User.service.spec.js',
			// partials :: header
			'app/partials/_header/header.directive.js',
			'app/partials/_header/header.controller.js',
			'app/partials/_header/header.controller.spec.js',
			// component :: search
			'app/components/_search/search.component.js',
			'app/components/_search/search.controller.js',
			'app/components/_search/search.controller.spec.js',
			// app views :: home
			'app/views/_home/home.controller.js',
			'app/views/_home/home.controller.spec.js',
			// app views :: detail
			'app/views/_detail/detail.controller.js',
			'app/views/_detail/detail.controller.spec.js',
			// app views :: welcome
			'app/views/_welcome/welcome.controller.js',
			'app/views/_welcome/welcome.controller.spec.js',
			// app views :: pair
			'app/views/_pair/pair.controller.js',
			'app/views/_pair/pair.controller.spec.js'
		],
		frameworks: [ 'jasmine' ],
		reporters: [ 'mocha' ] // @see https://www.npmjs.com/package/karma-mocha-reporter

	};

	config.set( _settings );

};

