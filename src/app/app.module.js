(function () {
  'use strict';

  angular.module('app', ['ngAnimate',  'ngAria', 'ngRoute', 'ngMaterial'])
    .constant('api', {
      url: 'http://localhost:3000'
    })
    .config( function( $routeProvider, $locationProvider ) {

      $routeProvider.when( '/signin', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninController',
        controllerAs: 'vm'
      } );

      $routeProvider.otherwise( {
        redirectTo: '/signin'
      } );
  });
})();
