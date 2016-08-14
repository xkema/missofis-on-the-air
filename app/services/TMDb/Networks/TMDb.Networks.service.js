/**
 * TMDb "Networks" Service
 * 
 * @see http://docs.themoviedb.apiary.io/
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb.Networks' )
		.factory( 'TMDbNetworks', TMDbNetworks );

	TMDbNetworks.$inject = [ '$resource', 'TMDbConstants' ];

	/**
	 * @description
	 * TMDb Networks Service
	 */
	function TMDbNetworks( $resource, TMDbConstants ) {

		return $resource( 'http://api.themoviedb.org/3/network/:id', 
			{
				api_key: 'e5622c57e54033c56b6cd5fced4e200b',
				id: '@endpoint'
			} );
		
	}

})();