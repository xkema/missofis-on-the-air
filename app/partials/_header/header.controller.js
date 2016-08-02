/**
 * Header controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'OnTheAirHeaderCtrl', OnTheAirHeaderCtrl );

	OnTheAirHeaderCtrl.$inject = [ '$log', 'OnTheAirFirebaseAuth', 'OnTheAirUtils', '$mdToast', '$location' ];

	/**
	 * Header controller
	 */
	function OnTheAirHeaderCtrl( $log, OnTheAirFirebaseAuth, OnTheAirUtils, $mdToast, $location ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.appState = null;

		// controller api
		vm.logoutUser = _logoutUser;
		vm.redirectToProfile = _redirectToProfile;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// logout user (returns result promise for tests)
		function _logoutUser() {
			return OnTheAirFirebaseAuth
				.logout()
				.then( function( response ) {
					$mdToast.showSimple( 'See u later!' );
				}, function( error ) {
					$log.debug( error );
				} );
		}

		// redirect to profile page (helps md-menu auto closing)
		function _redirectToProfile() {
			$location.path( '/profile/' + vm.appState.user.uid );
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'OnTheAirHeaderCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
		}

	}

})();