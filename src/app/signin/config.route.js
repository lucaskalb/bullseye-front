( function () {
  'use strict';

  angular
    .module( 'app.signin' )
    .run( appRun );

  function appRun( routehelper ) {
    routehelper.configureRoutes( getRoutes() );
  }

  function getRoutes() {
    return [{
      url: '/signin',
      config: {
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninController',
        controllerAs: 'vm',
        title: 'signin'
      }
    }];
  }
} )();
