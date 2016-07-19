/**
 * Application header directive
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.directive( 'onTheAirHeader', onTheAirHeader );

	/**
	 * 
	 */
	function onTheAirHeader() {

		return {

			templateUrl: 'partials/_header/template-ontheair-header.html',
			restrict: 'E',
			controller: 'OnTheAirHeaderCtrl',
			controllerAs: 'vm'

		};

	}

})();