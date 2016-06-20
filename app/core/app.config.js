/**
 * Bupz client module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.config( configApp )
		.run( runApp );

	configApp.$inject = [ '$locationProvider' ];
	runApp.$inject = [];

	/**
	 * Bupz client config block
	 */
	function configApp( $locationProvider ) {

		// todo :: requires server url rewriting
		// enable HTML5 History API with hashbang fallback
		// 'connect-history-api-fallback' fixes the reloading stuff
		$locationProvider.html5Mode( true ).hashPrefix( '!' );

	}

	/**
	 * Application main run block
	 */
	function runApp() {

	}

})();