/**
 * Application search component
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.component( 'onTheAirSearch', {

			templateUrl: function() {
				return 'components/_search/template-search.html';
			},
			controller: 'OnTheAirSearchCtrl',
			controllerAs: 'vm'

		} );

})();