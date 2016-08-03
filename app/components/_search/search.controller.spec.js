describe( ':: SearchCtrl', function() {

	'use strict';

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $log, $componentController, $httpBackend, 
		SearchCtrl, TMDbUtils;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$log_, _$componentController_, _$httpBackend_, _TMDbUtils_ ) {
			$log = _$log_; $componentController = _$componentController_; $httpBackend = _$httpBackend_; TMDbUtils = _TMDbUtils_;
			SearchCtrl = $componentController( 'onTheAirSearch' );
		} );
		jasmine.addCustomEqualityTester( angular.equals );
	} );

	describe( 'controller initialization', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirSearchCtrl' ] );
		} );

	} );

	describe( 'sync xhr calls', function() {

		beforeEach( function() {
			$httpBackend
				.expect( 'GET', TMDbUtils.queryBuilder( 'search', false, 'tv', { query: 'leyla' } ) )
				.respond( MockHelpers.getTvSearchResultsMockData() );
		} );

		it( 'should fill "searchResults" object with searchShow() call', function() {
			SearchCtrl.searchQuery = 'leyla';
			SearchCtrl.searchShow();
			$httpBackend.flush();
			expect( SearchCtrl.searchResult ).toEqual( MockHelpers.getTvSearchResultsMockData() );
		} );
	
	} );

} );