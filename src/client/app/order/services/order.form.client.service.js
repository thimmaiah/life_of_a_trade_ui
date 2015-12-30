(function() {
    'use strict';

    angular
        .module('app.order')
        .factory('OrderForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [

                 
	            {
	                key: 'buy_sell',
	                type: 'select',
	                templateOptions: {
	                    label: 'Buy_sell:',
	                    disabled: disabled,
	                    required: true,
	                    options: [
                          {name: 'Buy', value: 'BUY'},
                          {name: 'Sell', value: 'SELL'}
                        ]
	                }
	            },
	             
	            {
	                key: 'order_type',
	                type: 'select',
	                templateOptions: {
	                    label: 'Order_type:',
	                    disabled: disabled,
	                    required: true,
	                    options: [
                          {name: 'Market', value: 'MARKET'},
                          {name: 'Limit', value: 'LIMIT'}
                        ]
	                }
	            },
	             
	            {
	                key: 'user_id',
	                type: 'input',
	                templateOptions: {
	                    label: 'User_id:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'security_id',
	                type: 'input',
	                templateOptions: {
	                    label: 'Security_id:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'quantity',
	                type: 'input',
	                templateOptions: {
	                    label: 'Quantity:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'price',
	                type: 'input',
	                templateOptions: {
	                    label: 'Price:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	            

            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
