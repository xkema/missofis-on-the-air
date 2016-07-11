/**
 * OnTheAir "Auth" Service
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.OnTheAirFirebase.Auth' )
		.factory( 'OnTheAirFirebaseAuth', OnTheAirFirebaseAuth );

	OnTheAirFirebaseAuth.$inject = [];

	/**
	 * @description
	 * OnTheAir "Auth" Service
	 */
	function OnTheAirFirebaseAuth() {

		return {

			//  doSth Service
			register: _register,
			login: _login,
			logout: _logout

		};

		/*
		----------------------------------------------------------------
		Comment Service
		----------------------------------------------------------------
		*/

		/**
		 * Register
		 * 
		 * @param email
		 * @param password
		 */
		function _register( email, password ) {

			return firebase
				.auth()
				.createUserWithEmailAndPassword( email, password );

		}

		/**
		 * Login
		 * 
		 * @param email
		 * @param password
		 */
		function _login( email, password ) {

			return firebase
				.auth()
				.signInWithEmailAndPassword( email, password );

		}

		/**
		 * Logout
		 * 
		 * @param
		 */
		function _logout() {

			return firebase
				.auth()
				.signOut();

		}
		
	}

})();