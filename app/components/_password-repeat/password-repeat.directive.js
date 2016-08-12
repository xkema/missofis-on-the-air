/**
 * Password repeat validator directive
 * 
 * @see https://docs.angularjs.org/guide/forms#custom-validation
 */
(function () {

	'use strict';

	angular
		.module( 'com.missofis.ontheair' )
		.directive( 'onTheAirPasswordRepeater', onTheAirPasswordRepeater );

	/**
	 * 
	 */
	function onTheAirPasswordRepeater() {

		return {

			require: 'ngModel',
			restrict: 'A',
			scope: {
				matchTo: '='
			},
			link: function( scope, element, attrs, controller ) {
				// watch input changes of mathing input (main password)
				scope.$watch( 'matchTo', function( newVal, oldVal, scope ) {
					controller.$validate();
				} );
				// controller is FormController instance of register form
				controller.$validators.onTheAirPasswordRepeater = function( modelValue, viewValue ) {
					return scope.matchTo === viewValue;
				}
			}

		};

	}

})();