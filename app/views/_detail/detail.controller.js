/**
 * Detail controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'DetailCtrl', DetailCtrl );

	DetailCtrl.$inject = [ '$log', 'TMDbTV', '$routeParams', 'OnTheAirFirebaseDatabase', 'OnTheAirUtils', '$scope', '$mdDialog', '$mdToast', '$location', '$rootScope' ];

	/**
	 * Detail controller
	 */
	function DetailCtrl( $log, TMDbTV, $routeParams, OnTheAirFirebaseDatabase, OnTheAirUtils, $scope, $mdDialog, $mdToast, $location, $rootScope ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.show = null;
		vm.appState = null;
		vm.favorited = false;

		// controller api
		vm.getShow = _getShow;
		vm.toggleFavorite = _toggleFavorite;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// get show
		function _getShow() {			
			vm.show = TMDbTV.get( { id: $routeParams.showId } );
		}

		// toggle favorite
		function _toggleFavorite() {
			if( !vm.appState.user ) {
				$mdDialog
					.show( $mdDialog.confirm( {
						title: 'Uppsiee!',
						textContent: 'You should "login" to favorite content.',
						ok: 'Login',
						cancel: 'no thanks'
					} ) )
					.then( function() {
						$location.path( '/welcome' );
					}, function() {
						$mdToast.showSimple( 'Maybe later?' );
					} );
				return;
			}
			if( vm.favorited ) {
				OnTheAirFirebaseDatabase
					.unfavorite( vm.appState.user.uid, $routeParams.showId )
					.then( function() {
						delete vm.appState.user_favorites[ $routeParams.showId ];
						$scope.$apply( function() {
							vm.favorited = false;
						} );
						$rootScope.$apply();
					} );
			}
			else {
				OnTheAirFirebaseDatabase
					.favorite( vm.appState.user.uid, $routeParams.showId, vm.show.name )
					.then( function() {
						vm.appState.user_favorites[ $routeParams.showId ] = vm.show.name;
						$scope.$apply( function() {
							vm.favorited = true;
						} );
						$rootScope.$apply();
					} );
			}			
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'DetailCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
			$scope.$watch( 'vm.appState.user_favorites', function( newVal, oldVal ) {
				if( newVal ) {
					vm.favorited = vm.appState.user_favorites[ $routeParams.showId ];
				}
				else {
					vm.favorited = false;
				}
			} );
			vm.getShow();
		}

	}

})();