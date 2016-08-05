/**
 * Home controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'HomeCtrl', HomeCtrl );

	HomeCtrl.$inject = [ '$log', 'TMDbTV', 'TMDbUtils' ];

	/**
	 * Home controller
	 */
	function HomeCtrl( $log, TMDbTV, TMDbUtils ) {

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

		// controller api (new)
		/*
		angular.extend( this, {
			
			// public bindables
			shows: null,
			// public api
			getShows: _getShows,
			// private api (testability in mind)
			__: {
				init: _init
			}

		} );
		*/

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// get shows
		function _getShows() {
			vm.shows = TMDbTV.get( { endpoint: 'on_the_air' } );
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' );
			vm.getShows();
		}

	}

})();