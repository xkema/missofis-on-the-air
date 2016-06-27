// karma test wrapper (missofis on the air)
module.exports = function( config ) {

	var _settings = {

		basePath: '',
		autoWatch: true,
		browsers: [ 'PhantomJS' ],
		files: [
			// vendor
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'node_modules/angular-mocks/angular-mocks.js',
			// app
			'app/core/app.module.js',
			'app/core/app.config.js',
			'app/views/_*/*.js',
			// test helpers
			'test/mock-helpers/mock-helpers.js'
		],
		frameworks: [ 'jasmine' ],
		reporters: [ 'mocha' ] // @see https://www.npmjs.com/package/karma-mocha-reporter

	};

	config.set( _settings );

};