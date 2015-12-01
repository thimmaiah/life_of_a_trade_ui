(function() {
    'use strict';

    angular
        .module('app.trade')
        .factory('Trade', Trade);

    Trade.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Trade($resource, API_BASE_URL) {

        var params = {
            tradeId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/trades/:tradeId';

        return $resource(API_URL, params, actions);

    }

})();
