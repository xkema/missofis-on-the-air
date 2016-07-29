/**
 * Detail controller
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.controller( 'DetailCtrl', DetailCtrl );

	DetailCtrl.$inject = [ '$log', 'TMDbTV', '$routeParams', 'OnTheAirFirebaseDatabase', 'OnTheAirUtils' ];

	/**
	 * Detail controller
	 */
	function DetailCtrl( $log, TMDbTV, $routeParams, OnTheAirFirebaseDatabase, OnTheAirUtils ) {

		var vm = this;

		/*
		----------------------------------------------------------------
		Initiate public scope variables
		----------------------------------------------------------------
		*/
		
		// controller bindables
		vm.show = null;
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
			if( vm.favorited ) {
				OnTheAirFirebaseDatabase
					.unfavorite( OnTheAirUtils.getAppState().user.uid, $routeParams.showId );
			}
			else {
				OnTheAirFirebaseDatabase
					.favorite( OnTheAirUtils.getAppState().user.uid, $routeParams.showId );
			}			
			vm.favorited = !vm.favorited;
		}

		// controller initialize
		function _init() {
			$log.info( '$$____ :: CONTROLLER INITIALIZE', 'DetailCtrl' );
			vm.getShow();
		}

	}

})();