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
			unfavorite: _unfavorite

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
		 */
		function _favorite( userId, movieId ) {

			return firebase
				.database()
				.ref( 'user_favorites/' )
				.child( userId )
				.push( movieId );

		}

		/**
		 * Unfavorite
		 * 
		 * @param 
		 * @param 
		 */
		function _unfavorite( userId, movieId ) {

			return firebase
				.database()
				.ref( 'user_favorites/' + userId )
				.remove( movieId );

		}
		
	}

})();