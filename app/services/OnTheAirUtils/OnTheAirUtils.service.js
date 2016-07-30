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

		var _appState = {

			user: null,
			user_favorites: null

		};

		return {

			getAppState: _getAppState,
			setAppState: _setAppState

		};

		/*
		----------------------------------------------------------------
		Utils
		----------------------------------------------------------------
		*/

		/**
		 * desc
		 * 
		 * @param target
		 */
		function _getAppState( target ) {

			return target ? _appState[ target ] : _appState;

		}

		/**
		 * desc
		 * 
		 * @param target
		 * @param data
		 */
		function _setAppState( target, data ) {

			_appState[ target ] = data;

		}
		
	}

})();