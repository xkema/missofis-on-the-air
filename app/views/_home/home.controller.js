/**
 * Home controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'HomeCtrl', HomeCtrl );

	HomeCtrl.$inject = [ '$log', '$http' ];

	/**
	 * Home controller
	 */
	function HomeCtrl( $log, $http ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.shows = null;

		// controller api
		vm.getShows = _getShows;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// get shows
		function _getShows() {

			$http
				.get( 'test/mock-data/get.tv.on_the_air.json' )
				.then( function( response ) {
					vm.shows = response.data.results;
				} );

		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' );

			_getShows();

		}

	}

})();