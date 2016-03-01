// The resource used to interact with the REST service
(function() {
    'use strict';

    angular
        .module('app.triggeredEvent')
        .factory('TriggeredEvent', TriggeredEvent);

    TriggeredEvent.$inject = ['$resource', 'SPRAY_API_BASE_URL'];
    /* @ngInject */
    function TriggeredEvent($resource, SPRAY_API_BASE_URL) {

        var params = {
            triggeredEventId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            sendToSimulator: {
                method: 'POST',
            	url: SPRAY_API_BASE_URL + "/triggered_events/simulate",
            	params: {}
            },
            delete: {
                method: 'DELETE'
            }
        };

        var API_URL = SPRAY_API_BASE_URL + '/triggered_events/:triggeredEventId';

        return $resource(API_URL, params, actions);

    }

})();
