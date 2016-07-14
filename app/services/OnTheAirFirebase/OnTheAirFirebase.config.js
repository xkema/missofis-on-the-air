/**
 * On the Air Firebase module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase' )
		.run( runApp );

	runApp.$inject = [ '$log', 'OnTheAirUtils' ];

	/**
	 * Application main run block
	 */
	function runApp( $log, OnTheAirUtils ) {

		firebase
			.auth()
			.onAuthStateChanged( function( user ) {

				OnTheAirUtils.setAppState( 'user', user );

			}, function( error ) {

				$log.debug( error );

			}, function() {

				$log.debug( 'success' );

			} );
		

	}

})();
