describe( 'UNIT ::  Controller Test : HomeCtrl', function() {

	'use strict';

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $log, $rootScope, $controller, $httpBackend, 
		HomeCtrl, TMDbUtils;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$log_, _$rootScope_, _$controller_, _$httpBackend_, _TMDbUtils_ ) {
			$log = _$log_; $rootScope = _$rootScope_; $controller = _$controller_; $httpBackend = _$httpBackend_; TMDbUtils = _TMDbUtils_;
			HomeCtrl = $controller( 'HomeCtrl' );
		} );
		jasmine.addCustomEqualityTester( angular.equals ); // @see 
	} );

	afterEach(function () {
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

	describe( 'HomeCtrl', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' ] );
		} );

		describe( 'Sync XHR calls', function() {

			beforeEach( function() {
				$httpBackend
					.expect( 'GET', TMDbUtils.queryBuilder( 'tv', false, 'on_the_air', false ) )
					.respond( MockHelpers.getShowsMockData() );
				$httpBackend
					.expect( 'GET', TMDbUtils.queryBuilder( 'search', false, 'tv', { query: 'leyla' } ) )
					.respond( MockHelpers.getTvSearchResultsMockData() );
			} );

			it( 'should fill "shows" object with getShows() call', function() {
				$httpBackend.flush();
				expect( HomeCtrl.shows ).toEqual( MockHelpers.getShowsMockData() );
			} );

			it( 'should fill "searchResults" object with searchShow() call', function() {
				$httpBackend.flush();
				expect( HomeCtrl.searchResults ).toEqual( MockHelpers.getTvSearchResultsMockData() );
			} );
		
		} );

	} );

} );