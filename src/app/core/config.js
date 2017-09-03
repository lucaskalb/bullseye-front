(function() {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[Bullseye Error] ',
        appTitle: 'Bullseye',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure ($logProvider, $routeProvider, routehelperConfigProvider, exceptionHandlerProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'Bullseye: ';
        routehelperConfigProvider.config.resolveAlways = {ready: function () { } };
        // Configure the common exception handler
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
