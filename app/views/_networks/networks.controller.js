/**
 * Networks controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'NetworksCtrl', NetworksCtrl );

	NetworksCtrl.$inject = [ '$log', 'OnTheAirFirebaseDatabase', '$q', '$routeParams', 'TMDbDiscover' ];

	/**
	 * Networks controller
	 */
	function NetworksCtrl( $log, OnTheAirFirebaseDatabase, $q, $routeParams, TMDbDiscover ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.networkShows = null;
		vm.networks = null;
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
			// todo :: set details service
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

	}

})();