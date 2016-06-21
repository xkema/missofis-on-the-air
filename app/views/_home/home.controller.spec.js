describe( 'HomeCtrl Controller', function() {

	beforeEach( angular.mock.module( 'com.missofis.ontheair' ) );
	
	var $controller;
	
	beforeEach( inject( function( _$controller_ ) {
		$controller = _$controller_;
	} ) );

	describe( 'set HomeCtrl scope variables and methods', function() {
		
		var $scope, controller;
		
		beforeEach( function() {
			$scope = {};
			controller = $controller( 'HomeCtrl', { $scope: $scope } );
		} );

		it( 'should define shows property', function() {
			expect( controller.shows ).toBeDefined();
		} );
		
		it( 'should define getShows() method', function() {
			expect( controller.getShows ).toBeDefined();
		} );

		it( 'should set shows property', function() {
			controller.getShows();
			expect( controller.shows ).not.toBeNull();
		} );

	} );
	
} );
