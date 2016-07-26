/**
 * OnTheAirSearchCtrl Controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'OnTheAirSearchCtrl', OnTheAirSearchCtrl );

	OnTheAirSearchCtrl.$inject = [ '$log', '$scope', '$timeout', 'TMDbSearch' ];

	/**
	 * OnTheAirSearchCtrl controller
	 */
	function OnTheAirSearchCtrl( $log, $scope, $timeout, TMDbSearch ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/

		// controller bindables
		vm.searchResult = null;
		vm.searchQuery = 'leyla';

		// controller api
		vm.searchShow = _searchShow;

		// internals

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// search show
		function _searchShow() {

			vm.searchResult = TMDbSearch.get( { endpoint: 'tv', query: vm.searchQuery } );

		}
		
		/**
		 * Controller initialize
		 */
		function _init() {
			
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirSearchCtrl' );

		}

	}

})();