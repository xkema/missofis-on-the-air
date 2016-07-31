/**
 * Profile controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'ProfileCtrl', ProfileCtrl );

	ProfileCtrl.$inject = [ '$log', 'OnTheAirUtils', 'OnTheAirFirebaseUser', '$scope', '$mdToast', '$routeParams', 'OnTheAirFirebaseDatabase', '$mdDialog', '$location' ];

	/**
	 * Profile controller
	 */
	function ProfileCtrl( $log, OnTheAirUtils, OnTheAirFirebaseUser, $scope, $mdToast, $routeParams, OnTheAirFirebaseDatabase, $mdDialog, $location ) {

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
		vm.favorites = null;

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
				else {
					$mdDialog
						.show( $mdDialog.confirm( {
							title: 'Uppsiee!',
							textContent: 'You should "login" to see any user\'s profile.',
							ok: 'Login',
							cancel: 'no thanks'
						} ) )
						.then( function() {
							$location.path( '/welcome' );
						}, function() {
							$mdToast.showSimple( 'Maybe later?' );
							$location.path( '/' );
						} );
				}
			} );
			OnTheAirFirebaseUser
				.getUserProfile( $routeParams.userId )
				.then( function( response ) {
					$scope.$apply( function() {
						vm.profile = response;
					} );
				} );
			OnTheAirFirebaseDatabase
				.getUserFavorites( $routeParams.userId )
				.then( function( response ) {
					// OnTheAirUtils.setAppState( 'user_favorites', response );
					// $rootScope.$apply();
					// debugger;
					vm.favorites = response;
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