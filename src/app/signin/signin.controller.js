(function () {
  'use strict';
  angular.module('app')
    .controller('SigninController', SigninController);
    SigninController.$inject = ['signinService'];

    function SigninController(signinService) {
      var vm = this;

      vm.submit = submit;

      function submit() {
        signinService.submit(vm.formData, function (da) {
          alert('sucesso');
          console.log(da);
        },
        function (error) {
          alert(error)
        })
      }
    }
})();
