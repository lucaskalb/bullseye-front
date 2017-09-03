(function () {
  'use strict';
  angular.module('app.signin')
    .controller('SigninController', SigninController);

    SigninController.$inject = [ '$location', 'authService' ];

    function SigninController( $location, authService ) {
      var vm = this;

      vm.submit = submit;

      function submit() {
        authService.login(vm.formData).then(loginSuccess).catch(loginError);
      }

      function loginSuccess(data) {
        $location.path('/')
      }

      function loginError(e) {
        console.error(e);
      }

    }
})();
