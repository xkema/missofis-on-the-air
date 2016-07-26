/**
 * TMDb "Search" Service
 * 
 * @see http://docs.themoviedb.apiary.io/
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb.Search' )
		.factory( 'TMDbSearch', TMDbSearch );

	TMDbSearch.$inject = [ '$resource', 'TMDbConstants' ];

	/**
	 * @description
	 * TMDb Search Service
	 */
	function TMDbSearch( $resource, TMDbConstants ) {

		return $resource( 'http://api.themoviedb.org/3/search/:endpoint', 
			{
				api_key: 'e5622c57e54033c56b6cd5fced4e200b',
				endpoint: '@endpoint',
				query: ''
			} );
		
	}

})();