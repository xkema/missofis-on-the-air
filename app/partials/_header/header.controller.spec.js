describe( ':: OnTheAirHeaderCtrl', function() {

	'use strict';

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $log, $controller, $location, $mdToast, $rootScope, $q,
		OnTheAirHeaderCtrl, OnTheAirUtils, OnTheAirFirebaseAuth;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$log_, _$controller_, _$location_, _$mdToast_, _$rootScope_, _OnTheAirUtils_, _OnTheAirFirebaseAuth_, _$q_ ) {
			$log = _$log_; $controller = _$controller_; $location = _$location_; $mdToast = _$mdToast_; $rootScope = _$rootScope_; $q = _$q_;
			OnTheAirUtils = _OnTheAirUtils_; OnTheAirFirebaseAuth = _OnTheAirFirebaseAuth_;
			OnTheAirHeaderCtrl = $controller( 'OnTheAirHeaderCtrl' );
		} );
	} );

	describe( 'controller initialization', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' ] );
		} );

	} );

	describe( 'controller behaviour', function() {

		it( 'should set user data to "null" after a "logoutUser()" call', function() {
			var _userData = MockHelpers.getFirebaseUserData();
			OnTheAirUtils.setAppState( 'user', _userData );
			expect( OnTheAirHeaderCtrl.appState.user ).not.toBeNull();
			spyOn( OnTheAirHeaderCtrl, 'logoutUser' ).and.callFake( function() {
				OnTheAirUtils.setAppState( 'user', null );
			} );
			OnTheAirHeaderCtrl.logoutUser();
			expect( OnTheAirHeaderCtrl.appState.user ).toBeNull();
		} );

		it( 'should show toaster message after logout', function( done ) {
			spyOn( $mdToast, 'showSimple' );
			// mock logout service of firebase via OnTheAirFirebaseAuth
			spyOn( OnTheAirFirebaseAuth, 'logout' ).and.callFake( function() {
				return new firebase.Promise( function( resolve, reject ) {
					resolve( 'dummy resolved object' ); // does nothing with logout test, dummy return
				} );
			} );
			// mock logoutUser() controller method and done() async to vatch expectation
			OnTheAirHeaderCtrl.logoutUser().then( function() {
				expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'See u later!' );
				done();
			} );
		} );

		it( 'should show toaster message after logout (alternative test)', function() {
			// there is no need to return `return OnTheAirFirebaseAuth.logout().then(...)` promise from
			// `OnTheAirHeaderCtrl.logoutUser()` controller for this scenario
			spyOn( $mdToast, 'showSimple' );
			// mock logout service of firebase via OnTheAirFirebaseAuth but try an auto resolving mock `then() caller` promise handling
			spyOn( OnTheAirFirebaseAuth, 'logout' ).and.callFake( function() {
				return {
					then: function( callback ) {
						// this callback method is the anonymous __callback__ method in
						// `OnTheAirFirebaseAuth.logout().then( __callback__ )` method in OnTheAirHeaderCtrl.
						// so, __callback__ is equal to `function ( response ) { $mdToast.showSimple( 'See u later!' ); }`
						// calling `callback()` is the caller for `$mdToast.showSimple( 'See u later!' );` which is our expectation in this test
						callback();
					}
				};
			} );
			OnTheAirHeaderCtrl.logoutUser();
			expect( $mdToast.showSimple ).toHaveBeenCalledWith( 'See u later!' );
		} );

		it( 'should redirect to current user\'s profile page with `vm.appState.user.uid`', function() {
			spyOn( $location, 'path' );
			var _userData = MockHelpers.getFirebaseUserData();
			OnTheAirUtils.setAppState( 'user', _userData );
			OnTheAirHeaderCtrl.redirectToProfile();
			expect( $location.path ).toHaveBeenCalledWith( '/profile/' + _userData.uid );
		} );
		
	} );

} );