describe( ':: NetworksCtrl', function() {

	'use strict';
	
	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $controller, $rootScope,
		NetworksCtrl, OnTheAirFirebaseDatabase,
    _scope;

    // OnTheAirUtils, $scope, $mdDialog, $location, $mdToast

	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _$rootScope_, _OnTheAirFirebaseDatabase_ ) {
			$controller = _$controller_; $rootScope = _$rootScope_;
			OnTheAirFirebaseDatabase = _OnTheAirFirebaseDatabase_;
      _scope = $rootScope.$new();
			NetworksCtrl = $controller( 'NetworksCtrl', { $scope: _scope } );
		} );
	} );

	describe( 'controller initialization', function() {

		it( 'should define controller bindables', function() {
			expect( NetworksCtrl.networkShows ).toBeNull();
			expect( NetworksCtrl.networks ).toBeNull();
			expect( NetworksCtrl.networkDetails ).toBeNull();
			expect( NetworksCtrl.pageLoading ).toBe( true );
			expect( NetworksCtrl.networksVisible ).toBe( false );
		} );

		it( 'should define form submit handlers', function() {
			expect( NetworksCtrl.getNetworkShows ).toBeDefined();
			expect( NetworksCtrl.getNetworkDetails ).toBeDefined();
			expect( NetworksCtrl.getNetworks ).toBeDefined();
		} );
	
	} );

	describe( 'controller behaviour', function() {

		xit( 'should do sth..', function() {
			// 'go on, expect() sth..'
		} );

	} );

} );