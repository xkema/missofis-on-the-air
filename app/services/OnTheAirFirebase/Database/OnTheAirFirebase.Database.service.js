/**
 * OnTheAir Firebase "Database" Service
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase.Database' )
		.factory( 'OnTheAirFirebaseDatabase', OnTheAirFirebaseDatabase );

	OnTheAirFirebaseDatabase.$inject = [];

	/**
	 * @description
	 * OnTheAir "Database" Service
	 */
	function OnTheAirFirebaseDatabase() {

		return {

			//  doSth Service
			favorite: _favorite,
			unfavorite: _unfavorite,
			getUserFavorites: _getUserFavorites

		};

		/*
		----------------------------------------------------------------
		Comment Service
		----------------------------------------------------------------
		*/

		/**
		 * Favorite
		 * 
		 * @param 
		 * @param 
		 * @return
		 */
		function _favorite( userId, movieId ) {

			var _ref = firebase
				.database()
				.ref( 'user_favorites/' );

			return _ref
				.once( 'value' )
				.then( function( snapshot ) {
					if( !snapshot.child( userId ).child( movieId ).val() ) {
						return _ref.child( userId ).child( movieId ).set( true );
					}
				} );

		}

		/**
		 * Unfavorite
		 * 
		 * @param 
		 * @param 
		 * @return 
		 */
		function _unfavorite( userId, movieId ) {

			var _ref = firebase
				.database()
				.ref( 'user_favorites/' );

			return _ref
				.once( 'value' )
				.then( function( snapshot ) {
					if( snapshot.child( userId ).child( movieId ).val() ) {
						return _ref.child( userId ).child( movieId ).remove();
					}
				} );

		}

		/**
		 * Get user favorites
		 * 
		 * @param 
		 * @return
		 */
		function _getUserFavorites( userId ) {

			return firebase
				.database()
				.ref( 'user_favorites/' + userId )
				.once( 'value' )
				.then( function( snapshot ) {
					return snapshot.val();
				} );

		}
		
	}

})();