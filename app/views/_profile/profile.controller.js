/**
 * Profile controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'ProfileCtrl', ProfileCtrl );

	ProfileCtrl.$inject = [ '$log', 'OnTheAirUtils', 'OnTheAirFirebaseUser', '$scope', '$mdToast', '$routeParams' ];

	/**
	 * Profile controller
	 */
	function ProfileCtrl( $log, OnTheAirUtils, OnTheAirFirebaseUser, $scope, $mdToast, $routeParams ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.appState = null;
		vm.profile = null;
		vm.updateProfile = _updateProfile;
		vm.ownProfile = false;

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
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'ProfileCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
			$scope.$watch( 'vm.appState.user', function( newVal, oldVal ) {
				if( newVal ) {
					vm.ownProfile = $routeParams.userId === newVal.uid ? true : false;					
				}
			} );
			OnTheAirFirebaseUser
				.getUserProfile( $routeParams.userId )
				.then( function( response ) {
					$scope.$apply( function() {
						vm.profile = response;
					} );
				} );
		}

		// update user profile
		function _updateProfile() {			
			OnTheAirFirebaseUser
				.updateProfile( vm.appState.user.uid, OnTheAirUtils.trimObject( vm.profile ) )
				.then( function() {
					$mdToast.showSimple( 'Settings updated!' );
					$scope.formUpdateProfile.$setPristine();
				} )
				.catch( function() {
					$mdToast.showSimple( 'Something bad happened, settings not updated!' );
				} );
		}

	}

})();