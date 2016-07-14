/**
 * TMDb Interceptor
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb' )
		.factory( 'TMDbInterceptor', TMDbInterceptor );

	TMDbInterceptor.$inject = [ '$log', '$q' ];

	/**
	 * @description
	 * TMDb Interceptor
	 */
	function TMDbInterceptor( $log, $q ) {

		return {

			request: _request,
			response: _response,
			responseError: _responseError

		};

		function _request( config ) {

			// $log.info( '^^____ :: INTERCEPTOR (request)', config );

			return config;

		}

		// response
		function _response( response ) {

			$log.info( '^^____ :: INTERCEPTOR (response)', response );

			return response;

		}

		// response error
		function _responseError( rejection ) {

			// $log.info( '^^____ :: INTERCEPTOR (responseError)', rejection );

			return $q.reject( rejection );

		}

	}

})();