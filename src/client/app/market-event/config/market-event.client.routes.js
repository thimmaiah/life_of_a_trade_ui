// The routes for marketEvent
(function() {
    'use strict';

    angular
        .module('app.marketEvent')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listMarketEvent',
                config: {
                    url: '/market_event',
                    templateUrl: 'app/market-event/views/list.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'List MarketEvents',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> MarketEvents'
                    }
                }
            },
            {
                state: 'app.createMarketEvent',
                config: {
                    url: '/market_event/create',
                    templateUrl: 'app/market-event/views/create.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'Create MarketEvent'
                }
            },
            {
                state: 'app.viewMarketEvent',
                config: {
                    url: '/market_event/:marketEventId',
                    templateUrl: 'app/market-event/views/view.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'View MarketEvent'
                }
            },
            {
                state: 'app.editMarketEvent',
                config: {
                    url: '/market_event/:marketEventId/edit',
                    templateUrl: 'app/market-event/views/edit.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'Edit MarketEvent'
                }
            }
        ];
    }
})();
