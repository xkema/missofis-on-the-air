/**
 *  TMDb Service module constants
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb' )
		.constant( 'TMDbConstants', {

			'API_KEY': 'e5622c57e54033c56b6cd5fced4e200b',
			'API_BASE': 'http://api.themoviedb.org/3',
			'BACKDROP_OPTIONS': {
				'BACKDROP_BASE': 'http://image.tmdb.org/t/p',
				'BACKDROP_SIZES': {
					'SMALL': '/w300',
					'MEDIUM': '/w780',
					'LARGE': '/w1280',
					'ORIGINAL': '/original'
				}
			},
			'ENDPOINTS': {			

				'DISCOVER_TV': '/discover/tv',
				'SEARCH_TV': '/search/tv',
				'TV': '/tv/', // ':id' param appended in service
				'CREDITS': '/credits',
				'SIMILAR': '/similar'

			}

		} );

})();