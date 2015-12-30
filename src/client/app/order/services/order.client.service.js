(function() {
    'use strict';

    angular
        .module('app.order')
        .factory('Order', Order);

    Order.$inject = ['$resource', 'SPRAY_API_BASE_URL'];
    /* @ngInject */
    function Order($resource, SPRAY_API_BASE_URL) {

        var params = {
            orderId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = SPRAY_API_BASE_URL + '/orders/:orderId';

        return $resource(API_URL, params, actions);

    }

})();
