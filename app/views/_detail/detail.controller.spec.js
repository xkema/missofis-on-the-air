describe( 'UNIT ::  Controller Test : DetailCtrl', function() {

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var controller;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( $controller ) {
			controller = $controller( 'DetailCtrl' );
		} );
	} );

	describe( 'DetailCtrl :: Controller Creation', function() {

		it( 'should define "show" property and set it to "null"', function() {
			expect( controller.show ).toBeNull();
		} );

		it( 'should define "getShow()" method', function() {
			expect( controller.getShow ).toBeDefined();
		} );
		
	} );

	describe( 'DetailCtrl :: Controller XHR Related', function() {

		var $httpBackend;

		beforeEach( function() {
			angular.mock.inject( function( _$httpBackend_ ) {
				$httpBackend = _$httpBackend_;
			} );
		} );

		it( 'should fill "show" object', function() {
			var _showMockData = MockHelpers.getShowMockData();
			$httpBackend
				.expect( 'GET', 'test/mock-data/get.tv.id.json' )
				.respond( MockHelpers.getShowMockData() );
			$httpBackend.flush();
			expect( controller.show ).toEqual( _showMockData );
		} );

	} );

} );