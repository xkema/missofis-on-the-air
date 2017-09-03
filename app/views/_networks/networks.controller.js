/**
 * Networks controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'NetworksCtrl', NetworksCtrl );

	NetworksCtrl.$inject = [ '$log', 'OnTheAirFirebaseDatabase', '$q', '$routeParams', 'TMDbDiscover', 'TMDbNetworks', 'OnTheAirUtils', '$scope', '$mdDialog', '$location', '$mdToast' ];

	/**
	 * Networks controller
	 */
	function NetworksCtrl( $log, OnTheAirFirebaseDatabase, $q, $routeParams, TMDbDiscover, TMDbNetworks, OnTheAirUtils, $scope, $mdDialog, $location, $mdToast ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.networkShows = null;
		vm.networks = null;
		vm.networkDetails = null;
		vm.pageLoading = true;
		vm.networksVisible = false;

		// controller api
		vm.getNetworkShows = _getNetworkShows;
		vm.getNetworkDetails = _getNetworkDetails;
		vm.getNetworks = _getNetworks;

		// initialize controller
		_init();

		/*
		----------------------------------------------------------------
		Private API
		----------------------------------------------------------------
		*/

		// shows of selected network
		function _getNetworkShows() {
			return TMDbDiscover
				.get( { endpoint: 'tv', with_networks: $routeParams.networkId } )
				.$promise
				.then( function( response ) {
					vm.networkShows = response.results;
					vm.networksVisible = false;
				} );
		}

		// get selected network details
		function _getNetworkDetails() {
			return TMDbNetworks
				.get( { id: $routeParams.networkId } )
				.$promise
				.then( function( response ) {
					vm.networkDetails = response;
				} );
		}

		// fetch networks data form db
		function _getNetworks() {
			return OnTheAirFirebaseDatabase
				.getNetworks()
				.then( function( response ) {
					var _networks = [];
					for( var networkId in response.tmdb ) {
						_networks.push( { id: networkId, name: response.tmdb[ networkId ] } );
					}
					vm.networks = _networks;
					vm.networksVisible = true;
				} );
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'NetworksCtrl' );
      vm.appState = OnTheAirUtils.getAppState();
      $scope.$watchCollection( 'vm.appState.user', function( newVal, oldVal ) {
        if( false === newVal && false === oldVal ) {
          // skip initial $watch visit
          return;
        }
        else if( newVal ) {
    			var p1, p2, p3;
    			// get network shows if route param is available else list networks
    			if( $routeParams.networkId ) {
    				p2 = vm.getNetworkShows();
    				p3 = vm.getNetworkDetails();
    			}
    			else {
    				p1 = vm.getNetworks();
    			}
    			// hide progress bar
    			$q
    				.all( [ p1, p2, p3 ] )
    				.then( function() {
    					vm.pageLoading = false;
    				} );          
        }
        else {
          $mdDialog
            .show( $mdDialog.confirm( {
              title: 'Uppsiee!',
              textContent: 'You should "login" to see saved networks list',
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

	}

})();