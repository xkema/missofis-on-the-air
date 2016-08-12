/**
 * Networks controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'NetworksCtrl', NetworksCtrl );

	NetworksCtrl.$inject = [ '$log' ];

	/**
	 * Networks controller
	 */
	function NetworksCtrl( $log ) {

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
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'NetworksCtrl' );
		}

	}

})();