describe( ':: DetailCtrl', function() {

	'use strict';
	
	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $rootScope, $controller,
		DetailCtrl;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _$rootScope_ ) {
			$controller = _$controller_; $rootScope = _$rootScope_;
			DetailCtrl = $controller( 'DetailCtrl', { $scope: $rootScope.$new(), _show: MockHelpers.getShowMockData() } ); // , _show: MockHelpers.getShowMockData()
		} );
	} );

	describe( 'controller initilaization', function() {

		xit( 'should define "show" property and set it to "null"', function() {
			expect( DetailCtrl.show ).toBeNull();
		} );

		xit( 'should define "getShow()" method', function() {
			expect( DetailCtrl.getShow ).toBeDefined();
		} );
		
	} );

	describe( 'controller behaviour', function() {

		xit( 'should set tv show networks for collectors data', function() {
			// 
			DetailCtrl.setNetworks();
			expect( true ).toBe( false );
		} );

	} );

	describe( 'xhr', function() {

		var $httpBackend;

		beforeEach( function() {
			angular.mock.inject( function( _$httpBackend_ ) {
				$httpBackend = _$httpBackend_;
			} );
		} );

		xit( 'should fill "show" object', function() {
			var _showMockData = MockHelpers.getShowMockData();
			$httpBackend
				.expect( 'GET', 'test/mock-data/get.tv.id.json' )
				.respond( MockHelpers.getShowMockData() );
			$httpBackend.flush();
			expect( DetailCtrl.show ).toEqual( _showMockData );
		} );

	} );

} );