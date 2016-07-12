/**
 * OnTheAir "Utils" Service
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.factory( 'OnTheAirUtils', OnTheAirUtils );

	OnTheAirUtils.$inject = [];

	/**
	 * @description
	 * OnTheAir "Utils" Service
	 */
	function OnTheAirUtils() {

		return {

			//  doSth Service
			doSth: _doSth

		};

		/*
		----------------------------------------------------------------
		Utils
		----------------------------------------------------------------
		*/

		/**
		 * desc
		 * 
		 * @param 
		 */
		function _doSth( email, password ) {

			return firebase
				.auth()
				.createUserWithEmailAndPassword( email, password );

		}
		
	}

})();