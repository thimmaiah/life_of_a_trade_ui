// The routes for position
(function() {
    'use strict';

    angular
        .module('app.position')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listPosition',
                config: {
                    url: '/position',
                    templateUrl: 'app/position/views/list.html',
                    controller: 'PositionController',
                    controllerAs: 'vm',
                    title: 'List Positions',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Positions'
                    }
                }
            },
            {
                state: 'app.createPosition',
                config: {
                    url: '/position/create',
                    templateUrl: 'app/position/views/create.html',
                    controller: 'PositionController',
                    controllerAs: 'vm',
                    title: 'Create Position'
                }
            },
            {
                state: 'app.viewPosition',
                config: {
                    url: '/position/:positionId',
                    templateUrl: 'app/position/views/view.html',
                    controller: 'PositionController',
                    controllerAs: 'vm',
                    title: 'View Position'
                }
            },
            {
                state: 'app.editPosition',
                config: {
                    url: '/position/:positionId/edit',
                    templateUrl: 'app/position/views/edit.html',
                    controller: 'PositionController',
                    controllerAs: 'vm',
                    title: 'Edit Position'
                }
            }
        ];
    }
})();
