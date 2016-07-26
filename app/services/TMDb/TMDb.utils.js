/**
 * TMDb Utils Service
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb' )
		.factory( 'TMDbUtils', TMDbUtils );

	TMDbUtils.$inject = [ 'TMDbConstants' ];

	/**
	 * @description
	 * TMDb Utils Service
	 */
	function TMDbUtils( TMDbConstants ) {

		return {

			queryBuilder: _queryBuilder

		};

		/**
		 * Creates an API query (@see test scripts)
		 * 
		 * @param service
		 * @param id
		 * @param endpoint
		 * @param object params
		 */
		function _queryBuilder( service, id, endpoint, params ) {

			service = '/' + service;
			id = id ? '/' + id : '';
			endpoint = endpoint ? '/' + endpoint : '';
			// serialize params
			if( params ) {
				var _paramsSerialized = [];
				for( var name in params ) {
					_paramsSerialized.push( name + '=' + params[name] );
				}
				params = '&' + _paramsSerialized.join( '&' );				
			}
			else {
				params = '';
			}

			return TMDbConstants.API_BASE + service + id + endpoint + '?api_key=' + TMDbConstants.API_KEY + params;

		}
		
	}

})();