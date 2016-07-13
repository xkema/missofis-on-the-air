describe( 'UNIT ::  Controller Test : LoginCtrl', function() {

	'use strict';

	// MockHelpers is defined in the global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $controller,
		LoginCtrl;

	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_ ) {
			$controller = _$controller_;
			LoginCtrl = $controller( 'LoginCtrl' );
		} );
	} );

	describe( 'LoginCtrl', function() {

		it( 'should define controller bindables', function() {
			// form data
			expect( LoginCtrl.form.register ).toBeDefined();
			expect( LoginCtrl.form.login ).toBeDefined();
		} );

		it( 'should define form submit handlers', function() {
			// form data
			expect( LoginCtrl.registerUser ).toBeDefined();
			expect( LoginCtrl.loginUser ).toBeDefined();
			expect( LoginCtrl.logoutUser ).toBeDefined();
		} );

		it( 'should do sth..', function() {
			expect( module ).toBe( false );
		} );

	} );

} );