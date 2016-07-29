/**
 * Header controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'OnTheAirHeaderCtrl', OnTheAirHeaderCtrl );

	OnTheAirHeaderCtrl.$inject = [ '$log', 'OnTheAirFirebaseAuth', 'OnTheAirUtils', '$mdToast' ];

	/**
	 * Header controller
	 */
	function OnTheAirHeaderCtrl( $log, OnTheAirFirebaseAuth, OnTheAirUtils, $mdToast ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.appState = null;

		// controller api
		// vm.loginUser = _loginUser;
		vm.logoutUser = _logoutUser;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// login user
		/*
		function _loginUser() {
			OnTheAirFirebaseAuth
				.login( vm.form.login.email, vm.form.login.password );
		}
		*/

		// logout user
		function _logoutUser() {
			OnTheAirFirebaseAuth
				.logout()
				.then( function( response ) {
					$mdToast.showSimple( 'See u later!' );
				}, function( error ) {
					$log.debug( error );
				} );
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
		}

	}

})();