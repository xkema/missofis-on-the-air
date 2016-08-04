/**
 * On the Air Firebase module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase' )
		.run( runApp );

	runApp.$inject = [ '$log', 'OnTheAirUtils', '$rootScope', 'OnTheAirFirebaseDatabase', 'OnTheAirFirebaseUser', '$location' ];

	/**
	 * Application main run block
	 */
	function runApp( $log, OnTheAirUtils, $rootScope, OnTheAirFirebaseDatabase, OnTheAirFirebaseUser, $location ) {

		firebase
			.auth()
			.onAuthStateChanged( function( user ) {

				OnTheAirUtils.setAppState( 'user', user );
				$rootScope.$apply();

				if( user ) {
					OnTheAirFirebaseDatabase
						.getUserFavorites( user.uid )
						.then( function( response ) {
							OnTheAirUtils.setAppState( 'user_favorites', response );
							$rootScope.$apply();
						} );
					OnTheAirFirebaseUser
						.getUserProfile( user.uid )
						.then( function( response ) {
							OnTheAirUtils.setAppState( 'user_profile', response );
							$rootScope.$apply();							
						} );
				}
				else {
					OnTheAirUtils.setAppState( 'user_favorites', null );
					OnTheAirUtils.setAppState( 'user_profile', null );
					$rootScope.$apply();
				}

			}, function( error ) {

				$log.debug( error );

			}, function() {

				$log.debug( 'success' );

			} );
		

	}

})();
