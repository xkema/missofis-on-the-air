/**
 * TMDb "Discover" Service
 * 
 * @see http://docs.themoviedb.apiary.io/
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb.Discover' )
		.factory( 'TMDbDiscover', TMDbDiscover );

	TMDbDiscover.$inject = [ '$resource', 'TMDbConstants' ];

	/**
	 * @description
	 * TMDb Discover Service
	 */
	function TMDbDiscover( $resource, TMDbConstants ) {

		return $resource( 'http://api.themoviedb.org/3/discover/:endpoint', 
			{
				api_key: 'e5622c57e54033c56b6cd5fced4e200b',
				endpoint: '@endpoint',

				with_networks: ''
			} );
		
	}

})();