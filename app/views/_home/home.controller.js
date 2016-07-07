/**
 * Home controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'HomeCtrl', HomeCtrl );

	HomeCtrl.$inject = [ '$log', 'TMDbTV' ];

	/**
	 * Home controller
	 */
	function HomeCtrl( $log, TMDbTV ) {

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

			$log.debug( 'TMDbTV ::', TMDbTV );

			vm.shows = TMDbTV.get( { endpoint: 'on_the_air' } );

		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' );

			vm.getShows();

		}

	}

})();