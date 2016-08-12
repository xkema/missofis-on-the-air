/**
 * Welcome controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'WelcomeCtrl', WelcomeCtrl );

	WelcomeCtrl.$inject = [ '$log', 'OnTheAirFirebaseAuth', 'OnTheAirUtils', '$location', '$mdToast', '$scope' ];

	/**
	 * Welcome controller
	 */
	function WelcomeCtrl( $log, OnTheAirFirebaseAuth, OnTheAirUtils, $location, $mdToast, $scope ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.form = {
			register: {
				email: '',
				password: '',
				passwordRepeat: ''
			},
			login: {
				email: '', // demo user: john@missofis.com
				password: '' // demo password: allyouneedislove
			}
		};
		vm.appState = null;
		vm.activeTab = 0;

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
			if( !$scope.formRegisterUser.$valid ) {
				$mdToast.showSimple( 'Check the data you\'ve provided for register form, something is not validated in!' );
			}
			else {
				OnTheAirFirebaseAuth
					.register( vm.form.register.email, vm.form.register.password )
					.then( function( response ) {
						$mdToast.showSimple( 'You\'re registered! We also logged you in! Happy browsing!' );
						$location.path( '/' );
						$log.debug( response );
					}, function( error ) {
						// firebase error object structure is { code: 'string', message: 'string' }
						$mdToast.showSimple( error.message );
						$log.debug( error );
					} );				
			}
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
					$mdToast.showSimple( error.message );
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
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'WelcomeCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
			// todo :: set active tab based on url params or route
			// vm.activeTab = 1;
		}

	}

})();