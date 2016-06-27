/**
 * Detail controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'DetailCtrl', DetailCtrl );

	DetailCtrl.$inject = [ '$log', '$http' ];

	/**
	 * Detail controller
	 */
	function DetailCtrl( $log, $http ) {

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

			$http
				.get( 'test/mock-data/get.tv.id.json' )
				.then( function( response ) {
					vm.show = response.data;
				} );

		}

		// controller initialize
		function _init() {

			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'DetailCtrl' );

			_getShow();

		}

	}

})();