describe( 'UNIT ::  Controller Test : HomeCtrl', function() {

	'use strict';

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $log, $rootScope, $controller, $httpBackend, 
		HomeCtrl;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$log_, _$rootScope_, _$controller_, _$httpBackend_ ) {
			$log = _$log_; $rootScope = _$rootScope_; $controller = _$controller_; $httpBackend = _$httpBackend_;
			HomeCtrl = $controller( 'HomeCtrl' );
		} );
		jasmine.addCustomEqualityTester( angular.equals ); // @see 
	} );

	describe( 'HomeCtrl', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' ] );
		} );
		
		it( 'should fill "shows" object', function() {
			$httpBackend
				.expect( 'GET', 'http://api.themoviedb.org/3/tv/on_the_air?api_key=e5622c57e54033c56b6cd5fced4e200b' )
				.respond( MockHelpers.getShowsMockData() );				
			$httpBackend.flush();
			expect( HomeCtrl.shows ).toEqual( MockHelpers.getShowsMockData() );
		} );

	} );

} );