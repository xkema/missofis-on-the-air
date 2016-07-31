/**
 * Login controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'LoginCtrl', LoginCtrl );

	LoginCtrl.$inject = [ '$log', 'OnTheAirFirebaseAuth', 'OnTheAirUtils', '$location', '$mdToast' ];

	/**
	 * Login controller
	 */
	function LoginCtrl( $log, OnTheAirFirebaseAuth, OnTheAirUtils, $location, $mdToast ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.form = {
			register: {
				email: 'at@atmail.com',
				password: 'eJHStJe8ketqcBmU'
			},
			login: {
				email: 'at@atmail.com',
				password: 'eJHStJe8ketqcBmU'
			}
		};
		vm.appState = null;

		// controller api
		vm.registerUser = _registerUser;
		vm.loginUser = _loginUser;
		vm.logoutUser = _logoutUser;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// login user
		function _registerUser() {
			OnTheAirFirebaseAuth
				.register( vm.form.register.email, vm.form.register.password )
				.then( function( response ) {
					$log.debug( response );
				}, function( error ) {
					$log.debug( error );
				} );
		}

		// login user
		function _loginUser() {
			OnTheAirFirebaseAuth
				.login( vm.form.login.email, vm.form.login.password )
				.then( function( response ) {
					$mdToast.showSimple( 'Logged in succesfully!' );
					$location.path( '/' );
					$log.debug( response );
				}, function( error ) {
					$log.debug( error );
				} );
		}

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
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'LoginCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
		}

	}

})();