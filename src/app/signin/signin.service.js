(function () {
    'use strict';

    angular
        .module('app')
        .factory('signinService', SigninService);

    SigninService.$inject = ['$http', 'api'];

    function SigninService( $http , api) {
        var service = {
            submit: submit
        };

        return service;

        function submit( data, success, error ) {
            return $http( {
                method: 'POST',
                url: api.url + '/auth/login',
                data: data
              })
              .success(success)
              .error(error);
        }
    }
})();
