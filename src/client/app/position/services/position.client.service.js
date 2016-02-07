// The resource used to interact with the REST service
(function() {
    'use strict';

    angular
        .module('app.position')
        .factory('Position', Position);

    Position.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Position($resource, API_BASE_URL) {

        var params = {
            positionId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        };

        var API_URL = API_BASE_URL + '/positions/:positionId';

        return $resource(API_URL, params, actions);

    }

})();
