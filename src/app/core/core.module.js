(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate',  'ngAria', 'ngRoute', 'ngResource',

        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router',

        /*
         * 3rd Party modules
         */
        'ngMaterial', 'ngStorage'
    ]);
})();
