describe( 'UNIT ::  Controller Test : HeaderCtrl', function() {

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

	describe( 'OnTheAirHeaderCtrl', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' ] );
		} );

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

		it( 'should redirect to current user\'s profile page wit `vm.appState.user.uid`', function() {
			spyOn( $location, 'path' );
			var _userData = MockHelpers.getFirebaseUserData();
			OnTheAirUtils.setAppState( 'user', _userData );
			OnTheAirHeaderCtrl.redirectToProfile();
			expect( $location.path ).toHaveBeenCalledWith( '/profile/' + _userData.uid );
		} );
		
	} );

} );