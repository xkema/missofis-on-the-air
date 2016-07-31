describe( 'UNIT ::  Controller Test : WelcomeCtrl', function() {

	'use strict';

	// MockHelpers is defined in the global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $controller,
		WelcomeCtrl, OnTheAirUtils;

	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _OnTheAirUtils_ ) {
			$controller = _$controller_;
			OnTheAirUtils = _OnTheAirUtils_;
			WelcomeCtrl = $controller( 'WelcomeCtrl' );
		} );
	} );

	describe( 'WelcomeCtrl', function() {

		it( 'should define controller bindables', function() {
			expect( WelcomeCtrl.form.register ).toBeDefined();
			expect( WelcomeCtrl.form.login ).toBeDefined();
			expect( WelcomeCtrl.appState.user ).toEqual( false );
		} );

		it( 'should define form submit handlers', function() {
			expect( WelcomeCtrl.registerUser ).toBeDefined();
			expect( WelcomeCtrl.loginUser ).toBeDefined();
			expect( WelcomeCtrl.logoutUser ).toBeDefined();
		} );

		it( 'should update user email to newly registered user\'s randomly created email data', function() {
			var _userToBeRegistered = MockHelpers.getFirebaseUserData();
			_userToBeRegistered.email = Date.now()+'@test.com'; // alter data to check if it's registered properly
			WelcomeCtrl.form.register = { email: _userToBeRegistered.email, password: Math.random() }; // alter form data
			spyOn( WelcomeCtrl, 'registerUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', _userToBeRegistered );
			} );
			WelcomeCtrl.registerUser();
			expect( WelcomeCtrl.appState.user.email ).toBe( _userToBeRegistered.email );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY/edit
		it( 'should fill appState\'s user object with mock user data after calling "loginUser(...)"', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			expect( WelcomeCtrl.appState.user ).toBe( false );
			spyOn( WelcomeCtrl, 'loginUser' ).and.callFake( function() { // skip service call and fill app state object manually wşth mock data
				OnTheAirUtils.setAppState( 'user', _userData );
			} );
			WelcomeCtrl.loginUser();
			expect( WelcomeCtrl.appState.user ).toBe( _userData );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY/edit
		it( 'should set user data to "null" after a "logoutUser()" call', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			OnTheAirUtils.setAppState( 'user', _userData );
			expect( WelcomeCtrl.appState.user ).not.toBeNull();
			spyOn( WelcomeCtrl, 'logoutUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', null );
			} );
			WelcomeCtrl.logoutUser();
			expect( WelcomeCtrl.appState.user ).toBeNull();
		} );

	} );

} );