(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

    OrderController.$inject = ['logger',
        '$stateParams',
        '$location',
        '$state',
        'Order',
        'TableSettings',
        'OrderForm'];
    /* @ngInject */
    function OrderController(logger,
        $stateParams,
        $location,
        $state,
        Order,
        TableSettings,
        OrderForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Order);
        vm.order = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = OrderForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Order object
            var order = new Order(vm.order);

            // Redirect after save
            order.$save(function(response) {
                logger.success('Order created');
                $state.go("app.viewOrder",{"orderId": response.id});
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Order
        vm.remove = function(order) {

            if (order) {
                order = Order.get({orderId:order.id}, function() {
                    order.$remove(function() {
                        logger.success('Order deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.order.$remove(function() {
                    logger.success('Order deleted');
                    $state.go("app.listOrder");
                });
            }

        };

        // Update existing Order
        vm.update = function() {
            var order = vm.order;

            order.$update(function(response) {
                logger.success('Order updated');
                console.log(JSON.stringify(response));
                $state.go("app.listOrder");
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewOrder = function() {
            vm.order = Order.get({orderId: $stateParams.orderId});
            vm.setFormFields(true);
        };

        vm.toEditOrder = function() {
            vm.order = Order.get({orderId: $stateParams.orderId});
            vm.setFormFields(false);
        };
        
        vm.selectSecurity = function(item, model, label) {
      	  console.log(item);
      	  vm.order.security_id = item.id;
      	  vm.order.ticker = item.ticker;
      	};

        activate();

        function activate() {
            //logger.info('Activated Order View');
        }
    }

})();
