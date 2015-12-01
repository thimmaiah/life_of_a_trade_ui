(function() {
    'use strict';

    angular
        .module('app.security')
        .factory('SecurityForm', factory);

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
                    key: 'ticker',
                    type: 'input',
                    templateOptions: {
                        label: 'Ticker:',
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
                    key: 'asset_class',
                    type: 'input',
                    templateOptions: {
                        label: 'Asset Class:',
                        disabled: disabled
                    }
                },
                {
                    key: 'region',
                    type: 'input',
                    templateOptions: {
                        label: 'Region:',
                        disabled: disabled
                    }
                },
                {
                    key: 'sector',
                    type: 'input',
                    templateOptions: {
                        label: 'Sector:',
                        disabled: disabled
                    }
                },
                {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Description:',
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
