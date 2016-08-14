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
			saveNetworks: _saveNetworks,
			getUserFavorites: _getUserFavorites,
			getNetworks: _getNetworks

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
		function _favorite( userId, movieId, movieName ) {

			var _ref = firebase
				.database()
				.ref( 'user_favorites/' );

			return _ref
				.once( 'value' )
				.then( function( snapshot ) {
					if( !snapshot.child( userId ).child( movieId ).val() ) {
						return _ref.child( userId ).child( movieId ).set( movieName );
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
		 * Save network data for collector data
		 * 
		 * @param networks
		 * @param source "tmdb"
		 */
		function _saveNetworks( networks, source ) {

			var _ref = firebase
				.database()
				.ref( 'networks/' + source );

			// todo :: check if snapshot has alredy have current id

			return _ref
				.once( 'value' )
				.then( function( snapshot ) {
					angular.forEach( networks, function( value, key ) {
						if( !snapshot.val() || !snapshot.val().hasOwnProperty( value.id ) ) {
							return _ref.child( value.id ).set( value.name );
						}
					} );
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

		/**
		 * Fetch networks data
		 * 
		 * @param
		 */
		function _getNetworks() {
		
			return firebase
				.database()
				.ref( 'networks/' )
				.once( 'value' )
				.then( function( snapshot ) {
					return snapshot.val();
				} );
		
		}
		
	}

})();