(function() {
    'use strict';

    angular
        .module('app.user')
        .factory('UserForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'first_name',
                    type: 'input',
                    templateOptions: {
                        label: 'First Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'last_name',
                    type: 'input',
                    templateOptions: {
                        label: 'Last Name:',
                        disabled: disabled
                    }
                },                
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'Email:',
                        type: 'email',
                        placeholder: 'Enter email',
                        disabled: disabled
                    }
                },
                {
                    key: 'role',
                    type: 'input',
                    templateOptions: {
                        label: 'Role:',
                        disabled: disabled,
                        options: [
                          {name: 'Admin', value: 'Admin'},
                          {name: 'Trader', value: 'Trader'},
                          {name: 'Ops', value: 'Ops'},
                          {name: 'Simulation', value: 'Simulation'}
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
