/**
 * Detail controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'DetailCtrl', DetailCtrl );

	DetailCtrl.$inject = [ '$log', 'TMDbTV', '$routeParams' ];

	/**
	 * Detail controller
	 */
	function DetailCtrl( $log, TMDbTV, $routeParams ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.show = null;

		// controller api
		vm.getShow = _getShow;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// get show
		function _getShow() {
			
			vm.show = TMDbTV.get( { id: $routeParams.showId } );
			
		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'DetailCtrl' );

			vm.getShow();

		}

	}

})();