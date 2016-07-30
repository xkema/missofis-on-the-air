/**
 * On the Air Firebase module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase' )
		.run( runApp );

	runApp.$inject = [ '$log', 'OnTheAirUtils', '$rootScope', 'OnTheAirFirebaseDatabase' ];

	/**
	 * Application main run block
	 */
	function runApp( $log, OnTheAirUtils, $rootScope, OnTheAirFirebaseDatabase ) {

		firebase
			.auth()
			.onAuthStateChanged( function( user ) {

				OnTheAirUtils.setAppState( 'user', user );

				if( user ) {
					OnTheAirFirebaseDatabase
						.getUserFavorites( user.uid )
						.then( function( response ) {
							OnTheAirUtils.setAppState( 'user_favorites', response );
							$rootScope.$apply();
						} );
				}
				else {
					OnTheAirUtils.setAppState( 'user_favorites', null );
					$rootScope.$apply();
				}

				// $rootScope.$apply();

			}, function( error ) {

				$log.debug( error );

			}, function() {

				$log.debug( 'success' );

			} );
		

	}

})();
