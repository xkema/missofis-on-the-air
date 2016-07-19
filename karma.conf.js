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
			'node_modules/angular-mocks/angular-mocks.js',
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
			// app service :: Firebase module
			'app/services/OnTheAirFirebase/OnTheAirFirebase.module.js',
			'app/services/OnTheAirFirebase/OnTheAirFirebase.config.js',
			// app service :: Firebase Auth module
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.module.js',
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.service.js',
			'app/services/OnTheAirFirebase/Auth/OnTheAirFirebase.Auth.service.spec.js',
			// partials :: header
			'app/partials/_header/header.controller.js',
			'app/partials/_header/header.controller.spec.js',
			'app/partials/_header/header.directive.js',
			// app views :: home
			'app/views/_home/home.controller.js',
			'app/views/_home/home.controller.spec.js',
			// app views :: detail
			'app/views/_detail/detail.controller.js',
			'app/views/_detail/detail.controller.spec.js',
			// app views :: login
			'app/views/_login/login.controller.js',
			'app/views/_login/login.controller.spec.js'
		],
		frameworks: [ 'jasmine' ],
		reporters: [ 'mocha' ] // @see https://www.npmjs.com/package/karma-mocha-reporter

	};

	config.set( _settings );

};

