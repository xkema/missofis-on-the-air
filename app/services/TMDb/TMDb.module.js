/**
 * TMDb Service module
 */
(function () {

	'use strict';

	angular.module( 'com.missofis.TMDb', [

		'ngResource',

		'com.missofis.TMDb.TV',
		'com.missofis.TMDb.Search',
		'com.missofis.TMDb.Discover'

	] );

})();