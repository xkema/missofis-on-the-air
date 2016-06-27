describe( 'UNIT ::  Controller Test : HomeCtrl', function() {

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var controller;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( $controller ) {
			controller = $controller( 'HomeCtrl' );
		} );
	} );

	describe( 'HomeCtrl :: Controller Creation', function() {

		it( 'should define "shows" property and set it to "null"', function() {
			expect( controller.shows ).toBeNull();
		} );

		it( 'should define "getShows()" method', function() {
			expect( controller.getShows ).toBeDefined();
		} );
		
	} );

	describe( 'HomeCtrl :: Controller XHR Related', function() {

		var $httpBackend;

		beforeEach( function() {
			angular.mock.inject( function( _$httpBackend_ ) {
				$httpBackend = _$httpBackend_;
			} );
		} );

		it( 'should fill "shows" object', function() {
			var _showsMockData = MockHelpers.getShowsMockData();
			$httpBackend
				.expect( 'GET', 'test/mock-data/get.tv.on_the_air.json' )
				.respond( MockHelpers.getShowsMockData() ); // send server response object (pagination data along with results object) to PhantomJS browser -or any-
			$httpBackend.flush();
			expect( controller.shows ).toEqual( _showsMockData.results ); // check if shows object properly filled with results data from server response object
		} );

	} );

} );