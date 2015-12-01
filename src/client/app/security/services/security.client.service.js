(function() {
    'use strict';

    angular
        .module('app.security')
        .factory('Security', Security);

    Security.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Security($resource, API_BASE_URL) {

        var params = {
            securityId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/securities/:securityId';

        return $resource(API_URL, params, actions);

    }

})();
