/**
 * Pair controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'PairCtrl', PairCtrl );

	PairCtrl.$inject = [ '$log' ];

	/**
	 * Pair controller
	 */
	function PairCtrl( $log ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables

		// controller api

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'PairCtrl' );

		}

	}

})();