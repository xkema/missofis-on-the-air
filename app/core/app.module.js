/**
 * missofis on the air main module
 */
(function () {

	'use strict';

	angular.module( 'com.missofis.ontheair', [

		'ngRoute',
		'ngMaterial',

		'youtube-embed',

		'com.missofis.TMDb',
		'com.missofis.OnTheAirFirebase'

	] );

})();