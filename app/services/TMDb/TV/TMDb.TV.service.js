/**
 * TMDb "TV" Service
 * 
 * @see http://docs.themoviedb.apiary.io/
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb.TV' )
		.factory( 'TMDbTV', TMDbTV );

	TMDbTV.$inject = [ '$resource', 'TMDbConstants' ];

	/**
	 * @description
	 * TMDb TV Service
	 * 
	 * Omitting ":id" param does some magic :)
	 */
	function TMDbTV( $resource, TMDbConstants ) {

		return $resource( 'http://api.themoviedb.org/3/tv/:id/:endpoint', 
			{
				api_key: 'e5622c57e54033c56b6cd5fced4e200b',
				id: '@id',
				endpoint: '@endpoint'
			} );
		
	}

})();