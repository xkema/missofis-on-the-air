/**
 * On the Air Firebase module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase' )
		.run( runApp );

	runApp.$inject = [ '$log', 'OnTheAirUtils', '$rootScope' ];

	/**
	 * Application main run block
	 */
	function runApp( $log, OnTheAirUtils, $rootScope ) {

		firebase
			.auth()
			.onAuthStateChanged( function( user ) {

				OnTheAirUtils.setAppState( 'user', user );
				$rootScope.$apply();

			}, function( error ) {

				$log.debug( error );

			}, function() {

				$log.debug( 'success' );

			} );
		

	}

})();
