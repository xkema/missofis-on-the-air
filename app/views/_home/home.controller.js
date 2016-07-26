/**
 * Home controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'HomeCtrl', HomeCtrl );

	HomeCtrl.$inject = [ '$log', 'TMDbTV', 'TMDbUtils', 'TMDbSearch' ];

	/**
	 * Home controller
	 */
	function HomeCtrl( $log, TMDbTV, TMDbUtils, TMDbSearch ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.shows = null;
		vm.searchResults = null;

		// controller api
		vm.getShows = _getShows;
		vm.searchShow = _searchShow;

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

		// search show
		function _searchShow() {

			vm.searchResults = TMDbSearch.get( { endpoint: 'tv', query: 'leyla' } );

		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' );

			vm.getShows();

			vm.searchShow();

		}

	}

})();