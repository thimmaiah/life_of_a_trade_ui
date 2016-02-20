(function() {
    'use strict';

    angular
        .module('app.trade')
        .factory('TradeForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'order_id',
                    type: 'input',
                    templateOptions: {
                        label: 'Order:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'ticker',
                    type: 'input',
                    templateOptions: {
                        label: 'Ticker:',
                        disabled: disabled
                    }
                },
                {
                    key: 'quantity',
                    type: 'input',
                    templateOptions: {
                        label: 'Quantity:',
                        disabled: disabled
                    }
                },
                {
                    key: 'price',
                    type: 'input',
                    templateOptions: {
                        label: 'Price:',
                        disabled: disabled
                    }
                },
                {
                    key: 'buy_sell',
                    type: 'input',
                    templateOptions: {
                        label: 'Buy/Sell:',
                        disabled: disabled
                    }
                },
                {
                    key: 'trade_date',
                    type: 'input',
                    templateOptions: {
                        label: 'Trade Date:',
                        disabled: disabled
                    }
                },
                {
                    key: 'settlement_date',
                    type: 'input',
                    templateOptions: {
                        label: 'Settlement Date:',
                        disabled: disabled
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
