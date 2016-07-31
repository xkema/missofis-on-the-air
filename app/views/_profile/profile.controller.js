/**
 * Profile controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'ProfileCtrl', ProfileCtrl );

	ProfileCtrl.$inject = [ '$log', '$q', 'OnTheAirUtils', 'OnTheAirFirebaseUser', '$scope', '$mdToast', '$routeParams', 'OnTheAirFirebaseDatabase', '$mdDialog', '$location' ];

	/**
	 * Profile controller
	 */
	function ProfileCtrl( $log, $q, OnTheAirUtils, OnTheAirFirebaseUser, $scope, $mdToast, $routeParams, OnTheAirFirebaseDatabase, $mdDialog, $location ) {

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
		vm.pageLoading = true;

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
			$scope.$watchCollection( 'vm.appState.user', function( newVal, oldVal ) {
				if( false === newVal && false === oldVal ) {
					// skip initial $watch visit
					return;
				}
				else if( newVal ) {
					vm.ownProfile = $routeParams.userId === newVal.uid ? true : false;
					var p1 = OnTheAirFirebaseUser
						.getUserProfile( $routeParams.userId )
						.then( function( response ) {
							$scope.$apply( function() {
								vm.profile = response;
							} );
						} );
					var p2 = OnTheAirFirebaseDatabase
						.getUserFavorites( $routeParams.userId )
						.then( function( response ) {
							$scope.$apply( function() {
								vm.favorites = response;
							} );
						} );
					$q
						.all( [ p1, p2 ] )
						.then( function() {
							vm.pageLoading = false;
						} );
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
		}

		// update user profile
		function _updateProfile() {
			vm.pageLoading = true;
			var p3 = OnTheAirFirebaseUser
				.updateProfile( vm.appState.user.uid, OnTheAirUtils.trimObject( vm.profile ) )
				.then( function() {
					$mdToast.showSimple( 'Settings updated!' );
					$scope.formUpdateProfile.$setPristine();
				}, function() {
					$mdToast.showSimple( 'Something bad happened, settings not updated!' );
				} );
			$q
				.all( [ p3 ] )
				.then( function() {
					vm.pageLoading = false;
				} );
		}

	}

})();