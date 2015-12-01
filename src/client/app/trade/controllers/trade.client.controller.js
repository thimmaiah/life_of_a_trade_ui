(function () {
    'use strict';

    angular
        .module('app.trade')
        .controller('TradeController', TradeController);

    TradeController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Trade',
        'TableSettings',
        'TradeForm'];
    /* @ngInject */
    function TradeController(logger,
        $stateParams,
        $location,
        Trade,
        TableSettings,
        TradeForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Trade);
        vm.trade = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = TradeForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Trade object
            var trade = new Trade(vm.trade);

            // Redirect after save
            trade.$save(function(response) {
                logger.success('Trade created');
                $location.path('trade/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Trade
        vm.remove = function(trade) {

            if (trade) {
                trade = Trade.get({tradeId:trade.id}, function() {
                    trade.$remove(function() {
                        logger.success('Trade deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.trade.$remove(function() {
                    logger.success('Trade deleted');
                    $location.path('/trade');
                });
            }

        };

        // Update existing Trade
        vm.update = function() {
            var trade = vm.trade;

            trade.$update(function() {
                logger.success('Trade updated');
                $location.path('trade/' + trade.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewTrade = function() {
            vm.trade = Trade.get({tradeId: $stateParams.tradeId});
            vm.setFormFields(true);
        };

        vm.toEditTrade = function() {
            vm.trade = Trade.get({tradeId: $stateParams.tradeId});
            vm.setFormFields(false);
        };
        
        vm.selectSecurity = function(item, model, label) {
    	  console.log(item);
    	  vm.trade.security_id = item.id;
    	};

    	vm.selectCustomer = function(item, model, label) {
    	  console.log(item);
    	  vm.trade.customer_id = item.id;
    	};

        activate();

        function activate() {
            //logger.info('Activated Trade View');
        }
    }

})();
