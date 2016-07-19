describe( 'UNIT ::  Controller Test : HeaderCtrl', function() {

	'use strict';

	// MockHelpers helper script is defined in global scope and injected via karma.conf.js
	// @see `mock-helpers.js` for mock data helpers

	var $log, $controller,
		OnTheAirHeaderCtrl;
	
	beforeEach( function() {
		angular.mock.module( 'com.missofis.ontheair' );
		angular.mock.inject( function( _$log_, _$controller_ ) {
			$log = _$log_; $controller = _$controller_;
			OnTheAirHeaderCtrl = $controller( 'OnTheAirHeaderCtrl' );
		} );
	} );

	describe( 'OnTheAirHeaderCtrl', function() {

		it( 'should log controller initialization message ("hello world!" test)', function() {
			expect( $log.info.logs ).toContain( [ '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' ] );
		} );
		
	} );

} );