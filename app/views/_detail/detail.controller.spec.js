describe( ':: DetailCtrl', function() {

	'use strict';
	
	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $rootScope, $controller,
		DetailCtrl, OnTheAirUtils;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$controller_, _$rootScope_, _OnTheAirUtils_ ) {
			$controller = _$controller_; $rootScope = _$rootScope_;
			OnTheAirUtils = _OnTheAirUtils_;
			DetailCtrl = $controller( 'DetailCtrl', { $scope: $rootScope.$new(), _show: MockHelpers.getShowMockData() } ); // , _show: MockHelpers.getShowMockData()
		} );
	} );

	describe( 'controller initilaization', function() {

		it( 'should define controller bindables', function() {
			expect( DetailCtrl.show ).not.toBeNull(); // _show object resolved via route config, injected above
			OnTheAirUtils.setAppState( 'user', MockHelpers.getFirebaseUserData() );
			OnTheAirUtils.setAppState( 'user_favorites', MockHelpers.getUserFavoritesMockData() );
			OnTheAirUtils.setAppState( 'user_profile', MockHelpers.getUserProfileMockData() );
			expect( DetailCtrl.appState ).toEqual( OnTheAirUtils.getAppState() ); // set in initialization
			expect( DetailCtrl.favorited ).toEqual( false );
			expect( DetailCtrl.videoVisible ).toEqual( false );
			expect( DetailCtrl.video ).toBeNull();
			expect( DetailCtrl.youtubePlayer ).toBeNull();
			expect( DetailCtrl.pageLoading ).toEqual( true );
			expect( DetailCtrl.similar ).toBeNull();
		} );

		it( 'should define form submit handlers', function() {
			expect( DetailCtrl.getShow ).toBeDefined();
			expect( DetailCtrl.getVideos ).toBeDefined();
			expect( DetailCtrl.getSimilarShows ).toBeDefined();
			expect( DetailCtrl.setNetworks ).toBeDefined();
			expect( DetailCtrl.toggleFavorite ).toBeDefined();
			expect( DetailCtrl.toggleVideo ).toBeDefined();
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

		xit( 'should fill "similiar" object', function() {
			var _showMockData = MockHelpers.getShowMockData();
			$httpBackend
				.expect( 'GET', 'test/mock-data/get.tv.id.json' )
				.respond( MockHelpers.getShowMockData() );
			$httpBackend.flush();
			expect( DetailCtrl.show ).toEqual( _showMockData );
		} );

	} );

} );