(function() {
    'use strict';

    angular
        .module('app.customer')
        .factory('CustomerForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'bank',
                    type: 'input',
                    templateOptions: {
                        label: 'Bank:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'account_number',
                    type: 'input',
                    templateOptions: {
                        label: 'Account Number:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'credit_rating',
                    type: 'select',
                    templateOptions: {
                        label: 'Credit Rating:',
                        disabled: disabled,
                        options: [
                          {name: 'AAA', value: 'AAA'},
                          {name: 'AA', value: 'AA'},
                          {name: 'A', value: 'A'},
                          {name: 'BBB', value: 'BBB'},
                          {name: 'BB', value: 'BB'},
                          {name: 'B', value: 'B'},
                          {name: 'Junk', value: 'Junk'},
                        ]
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
