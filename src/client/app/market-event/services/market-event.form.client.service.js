(function() {
    'use strict';

    angular
        .module('app.marketEvent')
        .factory('MarketEventForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [

                 
	            {
	                key: 'name',
	                type: 'input',
	                templateOptions: {
	                    label: 'Name:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text'
	                }
	            },
	             
	            {
	                key: 'event_type',
	                type: 'select',
	                templateOptions: {
	                    label: 'Event_type:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text',
	                    options: [
                          {name: 'Market', value: 'Market'},
                          {name: 'Non Market', value: 'Non Market'}
                        ]
	                }
	            },
	             
	            {
	                key: 'summary',
	                type: 'input',
	                templateOptions: {
	                    label: 'Summary:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text'
	                }
	            },
	             
	            {
	                key: 'description',
	                type: 'textarea',
	                templateOptions: {
	                    label: 'Description:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'text'
	                }
	            },
	             
	            {
	                key: 'direction',
	                type: 'select',
	                templateOptions: {
	                    label: 'Direction:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text',
	                    options: [
                          {name: 'Up', value: 'Up'},
                          {name: 'Down', value: 'Down'}
                        ]
	                }
	            },
	             
	            {
	                key: 'intensity',
	                type: 'select',
	                templateOptions: {
	                    label: 'Intensity:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'text',
	                    options: [
                          {name: 'High', value: 'High'},
                          {name: 'Medium', value: 'Medium'},
                          {name: 'Low', value: 'Low'}
                        ]
	                }
	            },
	             
	            {
	                key: 'asset_class',
	                type: 'select',
	                templateOptions: {
	                    label: 'Asset_class:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'text',
	                    options: [
	                      {name: 'Stock', value: 'Stock'},
	                      {name: 'Bond', value: 'Bond'},
	                      {name: 'Derivative', value: 'Derivative'}
	                    ]
	                }
	            },
	             
	            {
	                key: 'region',
	                type: 'select',
	                templateOptions: {
	                    label: 'Region:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'text',
	                    options: [
	                      {name: 'NA', value: 'NA'},
	                      {name: 'EMEA', value: 'EMEA'},
	                      {name: 'APAC', value: 'APAC'}
	                    ]
	                }
	            },
	             
	            {
	                key: 'sector',
	                type: 'select',
	                templateOptions: {
	                    label: 'Sector:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'text',
	                    options: [
	                      {name: 'Tech', value: 'Tech'},
	                      {name: 'Pharma', value: 'Pharma'},
	                      {name: 'Auto', value: 'Auto'},
	                      {name: 'Finance', value: 'Finance'}
	                    ]
	                }
	            },
	             
	            {
	                key: 'ticker',
	                type: 'input',
	                templateOptions: {
	                    label: 'Ticker:',
	                    disabled: disabled,
	                    required: false,
	                    type: 'text'
	                }
	            },
	             
	            {
	                key: 'external_url',
	                type: 'input',
	                templateOptions: {
	                    label: 'External_url:',
	                    disabled: disabled,
	                    required: false,
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
