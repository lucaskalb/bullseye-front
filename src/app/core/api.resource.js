(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('api', api);

    function api( $resource, $location, $q, exception, logger, API_BASE_URL) {
      return $resource( API_BASE_URL, {}, {
  			login : {
  				url : API_BASE_URL + '/auth/login',
  				method : 'POST'
  			}
  		} );
    }
})();
