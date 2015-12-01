(function() {
    'use strict';

    angular
        .module('app.trade')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listTrade',
                config: {
                    url: '/trade',
                    templateUrl: 'app/trade/views/list.html',
                    controller: 'TradeController',
                    controllerAs: 'vm',
                    title: 'List Trades',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Trades'
                    }
                }
            },
            {
                state: 'app.createTrade',
                config: {
                    url: '/trade/create',
                    templateUrl: 'app/trade/views/create.html',
                    controller: 'TradeController',
                    controllerAs: 'vm',
                    title: 'Create Trade'
                }
            },
            {
                state: 'app.viewTrade',
                config: {
                    url: '/trade/:tradeId',
                    templateUrl: 'app/trade/views/view.html',
                    controller: 'TradeController',
                    controllerAs: 'vm',
                    title: 'View Trade'
                }
            },
            {
                state: 'app.editTrade',
                config: {
                    url: '/trade/:tradeId/edit',
                    templateUrl: 'app/trade/views/edit.html',
                    controller: 'TradeController',
                    controllerAs: 'vm',
                    title: 'Edit Trade'
                }
            }
        ];
    }
})();
