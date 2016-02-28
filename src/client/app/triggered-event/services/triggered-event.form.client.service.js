(function() {
    'use strict';

    angular
        .module('app.triggeredEvent')
        .factory('TriggeredEventForm', factory);

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
	                key: 'market_event_id',
	                type: 'input',
	                templateOptions: {
	                    label: 'Market_event_id:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'number'
	                }
	            },
	             
	            {
	                key: 'sent_to_sim',
	                type: 'input',
	                templateOptions: {
	                    label: 'Sent_to_sim:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'boolean'
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
