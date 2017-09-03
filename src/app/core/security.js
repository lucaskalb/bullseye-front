(function() {
    'use strict';

    angular
        .module('app.core')
        .run(security);

    function security( $sessionStorage, $rootScope, $location ) {
      $rootScope.$on( "$routeChangeStart", configure);

      function configure(event, next, current) {
        if (next.authorize && $sessionStorage.token == null )
          $rootScope.$evalAsync(redirectToSignin);
      }

      function redirectToSignin() {
        $location.path('/signin');
      }
    }
})();
