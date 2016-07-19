/**
 * Header controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'OnTheAirHeaderCtrl', OnTheAirHeaderCtrl );

	OnTheAirHeaderCtrl.$inject = [ '$log', 'OnTheAirFirebaseAuth', 'OnTheAirUtils' ];

	/**
	 * Header controller
	 */
	function OnTheAirHeaderCtrl( $log, OnTheAirFirebaseAuth, OnTheAirUtils ) {

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
				.logout();
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
		}

	}

})();