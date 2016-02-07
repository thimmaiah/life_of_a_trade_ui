(function() {
    'use strict';

    angular
        .module('app.position')
        .factory('PositionForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [

                 
	            {
	                key: 'id',
	                type: 'input',
	                templateOptions: {
	                    label: 'Id:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'ticker',
	                type: 'input',
	                templateOptions: {
	                    label: 'Ticker:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text'
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
	                key: 'average_price',
	                type: 'input',
	                templateOptions: {
	                    label: 'Average_price:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'pnl',
	                type: 'input',
	                templateOptions: {
	                    label: 'Pnl:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'updated_at',
	                type: 'input',
	                templateOptions: {
	                    label: 'Updated At:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text'
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
