/**
 * OnTheAir Firebase "User" Service
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase.User' )
		.factory( 'OnTheAirFirebaseUser', OnTheAirFirebaseUser );

	OnTheAirFirebaseUser.$inject = [];

	/**
	 * @description
	 * OnTheAir "User" Service
	 */
	function OnTheAirFirebaseUser() {

		return {

			updateProfile: _updateProfile,
			getUserProfile: _getUserProfile

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
		function _updateProfile( userId, profile ) {

			var _ref = firebase
				.database()
				.ref( 'users/' );

			return _ref
				.once( 'value' )
				.then( function( snapshot ) {
					return _ref.child( userId ).set( profile );
				} );

		}

		/**
		 * Get user profile
		 * 
		 * @param 
		 * @return
		 */
		function _getUserProfile( userId ) {

			return firebase
				.database()
				.ref( 'users/' + userId )
				.once( 'value' )
				.then( function( snapshot ) {
					return snapshot.val();
				} );

		}

	}

})();