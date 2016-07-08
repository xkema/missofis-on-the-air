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
		 */
		function _queryBuilder( service, id, endpoint ) {

			service = '/' + service;
			id = id ? '/' + id : '';
			endpoint = endpoint ? '/' + endpoint : '';

			return TMDbConstants.API_BASE + service + id + endpoint + '?api_key=' + TMDbConstants.API_KEY;

		}
		
	}

})();