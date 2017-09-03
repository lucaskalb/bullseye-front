( function () {
  'use strict';

  angular
    .module( 'app.dashboard' )
    .run( appRun );

  function appRun( routehelper ) {
    routehelper.configureRoutes( getRoutes() );
  }

  function getRoutes() {
    return [{
      url: '/',
      config: {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'Dashboard',
        controllerAs: 'vm',
        authorize: true,
        title: 'Dashboard'
      }
    }];
  }
} )();
