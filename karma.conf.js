// karma test wrapper (missofis on the air)
module.exports = function( config ) {

	var _settings = {

		basePath: '',
		autoWatch: true,
		browsers: [ 'PhantomJS' ],
		files: [
			// vendor
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-resource/angular-resource.min.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/firebase/firebase.js',
			'app/assets/scripts/firebase-initialize-app.js',
			// test helpers
			'test/mock-helpers/mock-helpers.js',
			// app
			'app/core/app.module.js',
			'app/core/app.config.js',
			'app/services/**/**/*.module.js',
			'app/services/**/*.constants.js',
			'app/services/**/*.utils.js',
			'app/services/**/**/*.*.service.js',
			'app/services/**/**/*.spec.js',
			// 'app/common/_*/*.js',
			'app/views/_*/*.js'
		],
		frameworks: [ 'jasmine' ],
		reporters: [ 'mocha' ] // @see https://www.npmjs.com/package/karma-mocha-reporter

	};

	config.set( _settings );

};

