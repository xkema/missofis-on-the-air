/**
 * On the Air client module configuration
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.config( configApp )
		.run( runApp );

	configApp.$inject = [ '$locationProvider', '$routeProvider' ];
	runApp.$inject = [ '$log' ];

	/**
	 * On the Air client config block
	 */
	function configApp( $locationProvider, $routeProvider ) {

		// todo :: requires server url rewriting
		// enable HTML5 History API with hashbang fallback
		// 'connect-history-api-fallback' fixes the reloading stuff
		$locationProvider.html5Mode( true ).hashPrefix( '!' );

		$routeProvider

			.when( '/', {
				templateUrl: 'views/_home/view-home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			} )
			.when( '/shows/:showId', {
				templateUrl: 'views/_detail/view-detail.html',
				controller: 'DetailCtrl',
				controllerAs: 'vm'
			} )
			.when( '/shows/:showId/pair', {
				templateUrl: 'views/_pair/view-pair.html',
				controller: 'PairCtrl',
				controllerAs: 'vm'
			} )
			.when( '/login', {
				templateUrl: 'views/_login/view-login.html',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			} )
			.when( '/profile/:userId', {
				templateUrl: 'views/_profile/view-profile.html',
				controller: 'ProfileCtrl',
				controllerAs: 'vm'
			} )
			.otherwise( {
				templateUrl: 'views/_error/view-error.html',
				redirectTo: '/404'
			} );

	}

	/**
	 * Application main run block
	 */
	function runApp( $log ) {

		

	}

})();