/**
 * Detail controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'DetailCtrl', DetailCtrl );

	DetailCtrl.$inject = [ '$log', 'TMDbTV', '$routeParams', 'OnTheAirFirebaseDatabase', 'OnTheAirUtils', '$scope', '$mdDialog', '$mdToast', '$location', '$rootScope', '_show', '$filter' ];

	/**
	 * Detail controller
	 */
	function DetailCtrl( $log, TMDbTV, $routeParams, OnTheAirFirebaseDatabase, OnTheAirUtils, $scope, $mdDialog, $mdToast, $location, $rootScope, _show, $filter ) {

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
		vm.videoVisible = false;
		vm.video = null;
		vm.youtubePlayer = null;
		vm.pageLoading = true;

		// controller api
		vm.getShow = _getShow;
		vm.getVideos = _getVideos;
		vm.setNetworks = _setNetworks;
		vm.toggleFavorite = _toggleFavorite;
		vm.toggleVideo = _toggleVideo;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// get show
		function _getShow() {			
			vm.show = _show; // resolved as _show at routing state, TMDbTV.get( { id: $routeParams.showId } );
		}

		// get show videos
		function _getVideos() {
			TMDbTV.get( { id: $routeParams.showId, endpoint: 'videos' } )
				.$promise
				.then( function( response ) {					
					vm.video = $filter( 'filter' )( response.results, 'Youtube' )[0];
					vm.pageLoading = false;
				} );
		}

		// set networks for collectors data
		function _setNetworks() {
			// `angular.copy( _show.networks )` prevents $$hashKey creation of `vm.show = _show;` assignment.
			OnTheAirFirebaseDatabase
				.saveNetworks( angular.copy( _show.networks ) )
				.then( function( response ) {
					// todo :: show toaster message
					// debugger;
				} );
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
						// todo :: check for another solution (initial app set is false, but service returns null. false set needed for $watchCollection below)
						if( null === vm.appState.user_favorites ) {
							vm.appState.user_favorites = {};
						}
						vm.appState.user_favorites[ $routeParams.showId ] = vm.show.name;
						$scope.$apply( function() {
							vm.favorited = true;
						} );
						$rootScope.$apply();
					} );
			}			
		}

		// toggle video
		function _toggleVideo() {
			if( vm.videoVisible ) {
				vm.youtubePlayer.stopVideo();
				vm.videoVisible = false;
			}
			else {
				// vm.youtubePlayer.playVideo();
				vm.videoVisible = true;
			}
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'DetailCtrl' );
			vm.appState = OnTheAirUtils.getAppState();
			$scope.$watchCollection( 'vm.appState.user_favorites', function( newVal, oldVal ) {
				if( false === newVal && false === oldVal ) {
					// skip initial $watch visit
					return;
				}
				else if( newVal ) {
					vm.favorited = vm.appState.user_favorites[ $routeParams.showId ];
				}
				else {
					vm.favorited = false;
				}
			} );
			vm.getShow();
			vm.getVideos();
			vm.setNetworks();
		}

	}

})();