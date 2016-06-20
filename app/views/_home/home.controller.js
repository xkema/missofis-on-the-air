/**
 * Home controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'HomeCtrl', HomeCtrl );

	HomeCtrl.$inject = [];

	/**
	 * Home controller
	 */
	function HomeCtrl() {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.sth = null;

		// controller api
		vm.sthFn = _sthFn;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// 
		function _sthFn() {

			

		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'HomeCtrl' );

		}

	}

})();