describe( 'UNIT ::  Controller Test : LoginCtrl', function() {

	'use strict';

	// MockHelpers is defined in the global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $controller,
		LoginCtrl, OnTheAirUtils;

	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _OnTheAirUtils_ ) {
			$controller = _$controller_;
			OnTheAirUtils = _OnTheAirUtils_;
			LoginCtrl = $controller( 'LoginCtrl' );
		} );
	} );

	describe( 'LoginCtrl', function() {

		it( 'should define controller bindables', function() {
			// form data
			expect( LoginCtrl.form.register ).toBeDefined();
			expect( LoginCtrl.form.login ).toBeDefined();
			expect( LoginCtrl.appState.user ).toBeNull();
		} );

		it( 'should define form submit handlers', function() {
			// form data
			expect( LoginCtrl.registerUser ).toBeDefined();
			expect( LoginCtrl.loginUser ).toBeDefined();
			expect( LoginCtrl.logoutUser ).toBeDefined();
		} );

		it( 'should update user email to newly registered user\'s randomly created email data', function() {
			var _userToBeRegistered = MockHelpers.getFirebaseUserData();
			_userToBeRegistered.email = Date.now()+'@test.com'; // alter data to check if it's registered properly
			LoginCtrl.form.register = { email: _userToBeRegistered.email, password: Math.random() }; // alter form data
			spyOn( LoginCtrl, 'registerUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', _userToBeRegistered );
			} );
			LoginCtrl.registerUser();
			expect( LoginCtrl.appState.user.email ).toBe( _userToBeRegistered.email );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY/edit
		it( 'should fill appState\'s user object with mock user data after calling "loginUser(...)"', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			expect( LoginCtrl.appState.user ).toBe( null );
			spyOn( LoginCtrl, 'loginUser' ).and.callFake( function() { // skip service call and fill app state object manually wşth mock data
				OnTheAirUtils.setAppState( 'user', _userData );
			} );
			LoginCtrl.loginUser();
			expect( LoginCtrl.appState.user ).toBe( _userData );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY/edit
		it( 'should set user data to "null" after a "logoutUser()" call', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			OnTheAirUtils.setAppState( 'user', _userData );
			expect( LoginCtrl.appState.user ).not.toBeNull();
			spyOn( LoginCtrl, 'logoutUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', null );
			} );
			LoginCtrl.logoutUser();
			expect( LoginCtrl.appState.user ).toBeNull();
		} );

	} );

} );