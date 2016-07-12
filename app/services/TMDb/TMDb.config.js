/**
 * TMDb module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.TMDb' )
		.config( configApp );

	configApp.$inject = [ '$httpProvider' ];

	/**
	 * TMDb config block
	 */
	function configApp( $httpProvider ) {

		$httpProvider.interceptors.push( 'TMDbInterceptor' );

	}

})();