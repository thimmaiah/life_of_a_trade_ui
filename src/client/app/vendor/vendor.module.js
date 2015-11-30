(function () {
    'use strict';

    angular.module('app.vendor', ['ngAnimate', 'ngStorage', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'toaster']);
    angular.module('app').requires.push('app.vendor');
    
    
})();
