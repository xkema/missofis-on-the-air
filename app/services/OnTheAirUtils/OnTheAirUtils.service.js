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
			setAppState: _setAppState,
			trimObject: _trimObject

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

		/**
		 * Trim objects to save space in firebase database
		 * 
		 * @param object item
		 */
		function _trimObject( item ) {
		
			for( var name in item ) {

				if( !item[ name ] ) {
					delete item[ name ];
				}

			}

			return item;
		
		}
		
	}

})();