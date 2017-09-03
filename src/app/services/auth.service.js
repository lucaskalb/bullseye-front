(function() {
    'use strict';

    angular
        .module('app.service')
        .service('authService', AuthService);

    function AuthService( api, $q, $sessionStorage) {
      return {
        login: login
      };

      function login( params ) {
        return $q( function(resolve, reject) {
          return api.login( params, {},

            function(response) {
              $sessionStorage.token = response.auth_token;
              resolve(response);
            },

            function(error) {
              reject(error)
            } );
        });
      }
    }
})();
