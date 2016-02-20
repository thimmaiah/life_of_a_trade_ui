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
	                key: 'exchange',
	                type: 'select',
	                templateOptions: {
	                    label: 'Exchange:',
	                    disabled: disabled,
	                    required: true,
	                    options: [
                          {name: 'Nyse', value: 'NYSE'},
                          {name: 'Nasdaq', value: 'NASDAQ'}
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
	                className: 'display-none',
	                templateOptions: {
	                    label: 'User_id:',
	                    disabled: disabled,
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
	                key: 'unfilled_qty',
	                type: 'input',
	                className: 'display-none',
	                templateOptions: {
	                    label: 'Unfilled Quantity:',
	                    disabled: disabled,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'price',
	                type: 'input',
	                templateOptions: {
	                    label: 'Price:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'number'
	                },
	                expressionProperties: {
	                    hide: function($viewValue, $modelValue, scope) {
	                    	console.log("hide called: " + scope.model.order_type);
					        return !(scope.model.order_type && scope.model.order_type === 'LIMIT');
					    }
	                }
	               
	            },
	            
	            {
	                key: 'pre_trade_check_status',
	                type: 'input',     	             
                    className: 'display-none',
	                templateOptions: {
	                    label: 'Pre Trade:',		                
	                    disabled: disabled,
	                    required: false
	                }
	            },
	            {
	                key: 'trade_status',
	                type: 'input',
	                className: 'display-none',
	                templateOptions: {
	                    label: 'Status:',
	                    disabled: disabled,
	                    required: false,
	                    hidden: true
	                }
	            }
	            

            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
