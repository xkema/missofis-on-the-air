describe( ':: WelcomeCtrl', function() {

	'use strict';

	// MockHelpers is defined in the global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $controller, $rootScope, $mdToast, $location,
		WelcomeCtrl, OnTheAirUtils, OnTheAirFirebaseAuth,
		_scope;

	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _$rootScope_, _$mdToast_, _$location_, _OnTheAirUtils_, _OnTheAirFirebaseAuth_ ) {
			$controller = _$controller_; $rootScope = _$rootScope_; $mdToast = _$mdToast_; $location = _$location_;
			OnTheAirUtils = _OnTheAirUtils_; OnTheAirFirebaseAuth = _OnTheAirFirebaseAuth_;
			_scope = $rootScope.$new();
			WelcomeCtrl = $controller( 'WelcomeCtrl', { $scope: _scope } );
		} );
	} );

	describe( 'controller initialization', function() {

		it( 'should define controller bindables', function() {
			expect( WelcomeCtrl.form.register ).toBeDefined();
			expect( WelcomeCtrl.form.login ).toBeDefined();
			expect( WelcomeCtrl.appState.user ).toEqual( false );
			expect( WelcomeCtrl.activeTab ).toEqual( 0 );
		} );

		it( 'should define form submit handlers', function() {
			expect( WelcomeCtrl.registerUser ).toBeDefined();
			expect( WelcomeCtrl.loginUser ).toBeDefined();
			expect( WelcomeCtrl.logoutUser ).toBeDefined();
		} );
	
	} );

	describe( 'controller behaviour', function() {

		it( 'should update user email to newly registered user\'s randomly created email data with "registerUser(...)"', function() {
			var _userToBeRegistered = MockHelpers.getFirebaseUserData();
			_userToBeRegistered.email = Date.now()+'@test.com'; // alter data to check if it's registered properly
			WelcomeCtrl.form.register = { email: _userToBeRegistered.email, password: Math.random() }; // alter form data
			spyOn( WelcomeCtrl, 'registerUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', _userToBeRegistered );
			} );
			WelcomeCtrl.registerUser();
			expect( WelcomeCtrl.appState.user.email ).toBe( _userToBeRegistered.email );
		} );

		it( 'should show toaster message with "You\'re register..." text after "registerUser()" call (happy path)', function() {
			spyOn( $mdToast, 'showSimple' );
			spyOn( $location, 'path' );
			spyOn( OnTheAirFirebaseAuth, 'register' ).and.callFake( function() {
				return {
					then: function( onResolve, onReject ) {
						onResolve();
					}
				};
			} );
			_scope.formRegisterUser = { $valid: true }; // mock form validity
			WelcomeCtrl.registerUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'You\'re registered! We also logged you in! Happy browsing!' );
			expect( $location.path ).toHaveBeenCalledWith( '/' );
		} );

		it( 'should show toaster message with "You\'re register..." text after "registerUser()" call (sad path)', function() {
			var _error = new firebase.auth.Error( 'firebase-dummy-error-code', 'dummy error message from firebase response' );
			spyOn( $mdToast, 'showSimple' );
			spyOn( OnTheAirFirebaseAuth, 'register' ).and.callFake( function() {
				return {
					then: function( onResolve, onReject ) {
						onReject( _error );
					}
				};
			} );			
			_scope.formRegisterUser = { $valid: true }; // mock form validity
			WelcomeCtrl.registerUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( _error.message );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY
		it( 'should fill appState\'s user object with mock user data after calling "loginUser(...)"', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			expect( WelcomeCtrl.appState.user ).toBe( false );
			spyOn( WelcomeCtrl, 'loginUser' ).and.callFake( function() { // skip service call and fill app state object manually wşth mock data
				OnTheAirUtils.setAppState( 'user', _userData );
			} );
			WelcomeCtrl.loginUser();
			expect( WelcomeCtrl.appState.user ).toBe( _userData );
		} );

		// @see https://docs.google.com/drawings/d/1ROA2caKz8DxcpZ_EbvbJmnGgIqB3U1bCC7hEC_UsGEY
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

		it( 'should show toaster message and redirect to "/" after "loginUser()" call', function() {
			spyOn( $mdToast, 'showSimple' );
			spyOn( $location, 'path' );
			spyOn( OnTheAirFirebaseAuth, 'login' ).and.callFake( function() {
				return {
					then: function( onResolve, onReject ) {
						onResolve();
					}
				};
			} );
			WelcomeCtrl.loginUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'Logged in succesfully!' );
			expect( $location.path ).toHaveBeenCalledWith( '/' );
		} );

		it( 'should show toaster message "loginUser()" call (sad path)', function() {
			var _error = new firebase.auth.Error( 'firebase-dummy-error-code', 'dummy error message from firebase response' );
			spyOn( $mdToast, 'showSimple' );
			spyOn( OnTheAirFirebaseAuth, 'login' ).and.callFake( function() {
				return {
					then: function( onResolve, onReject ) {
						onReject( _error );
					}
				};
			} );
			WelcomeCtrl.loginUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( _error.message );
		} );

		it( 'should show toaster message with "See u later!" text after "logoutUser()" call', function() {
			spyOn( $mdToast, 'showSimple' );
			spyOn( OnTheAirFirebaseAuth, 'logout' ).and.callFake( function() {
				return {
					then: function( onResolve, onReject ) {
						onResolve();
					}
				};
			} );
			WelcomeCtrl.logoutUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'See u later!' );
		} );

		it( 'should show toaster with "Check the data.." message if form is invalid', function() {
			spyOn( $mdToast, 'showSimple' );
			spyOn( OnTheAirFirebaseAuth, 'register' );
			_scope.formRegisterUser = { $valid: false }; // mock form validity
			WelcomeCtrl.registerUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'Check the data you\'ve provided for register form, something is not validated in!' );
			expect( OnTheAirFirebaseAuth.register ).not.toHaveBeenCalled();
		} );

	} );

} );