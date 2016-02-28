// The routes for triggeredEvent
(function() {
    'use strict';

    angular
        .module('app.triggeredEvent')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listTriggeredEvent',
                config: {
                    url: '/triggered-event',
                    templateUrl: 'app/triggered-event/views/list.html',
                    controller: 'TriggeredEventController',
                    controllerAs: 'vm',
                    title: 'List TriggeredEvents',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> TriggeredEvents'
                    }
                }
            },
            {
                state: 'app.createTriggeredEvent',
                config: {
                    url: '/triggered-event/create',
                    templateUrl: 'app/triggered-event/views/create.html',
                    controller: 'TriggeredEventController',
                    controllerAs: 'vm',
                    title: 'Create TriggeredEvent'
                }
            },
            {
                state: 'app.viewTriggeredEvent',
                config: {
                    url: '/triggered-event/:triggeredEventId',
                    templateUrl: 'app/triggered-event/views/view.html',
                    controller: 'TriggeredEventController',
                    controllerAs: 'vm',
                    title: 'View TriggeredEvent'
                }
            },
            {
                state: 'app.editTriggeredEvent',
                config: {
                    url: '/triggered-event/:triggeredEventId/edit',
                    templateUrl: 'app/triggered-event/views/edit.html',
                    controller: 'TriggeredEventController',
                    controllerAs: 'vm',
                    title: 'Edit TriggeredEvent'
                }
            }
        ];
    }
})();
