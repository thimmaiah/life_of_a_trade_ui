(function () {
    'use strict';

    angular
        .module('app.marketEvent')
        .controller('MarketEventController', MarketEventController);

    MarketEventController.$inject = ['logger',
        '$stateParams',
        '$state',
        'MarketEvent',
        'TableSettings',
        'MarketEventForm',
        'Faye'];
    /* @ngInject */
    function MarketEventController(logger,
        $stateParams,
        $state,
        MarketEvent,
        TableSettings,
        MarketEventForm,
        Faye) {

        var vm = this;

        // This is used to load the data into the table. 
        // See http://ng-table.com/ and app/core/services/table.settings.service.js
        vm.tableParams = TableSettings.getParams(MarketEvent);
        vm.marketEvent = {};

        // Setup the form fields. Used by angular-formly to create the fields for the form. 
        // See http://angular-formly.com/ and services/market-event.form.client.service.js and views/create.html
        vm.setFormFields = function(disabled) {
            vm.formFields = MarketEventForm.getFormFields(disabled);
        };

        // Create new MarketEvent        
        vm.create = function() {
            // Create new MarketEvent object
            var marketEvent = new MarketEvent(vm.marketEvent);

            // Redirect after save
            marketEvent.$save(function(response) {
                logger.success('MarketEvent created');
                $state.go("app.viewMarketEvent", {'marketEventId': response.id});
            }, function(errorResponse) {
                vm.error = errorResponse;
            });
        };

        // Remove existing MarketEvent
        vm.remove = function(marketEvent) {

            if (marketEvent) {
                marketEvent = MarketEvent.get({marketEventId:marketEvent.id}, function() {
                    marketEvent.$remove(function() {
                        logger.success('MarketEvent deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.marketEvent.$remove(function() {
                    logger.success('MarketEvent deleted');
                    $state.go("app.listMarketEvent");
                });
            }

        };

        // Update existing MarketEvent
        vm.update = function() {
            var marketEvent = vm.marketEvent;

            marketEvent.$update(function() {
                logger.success('MarketEvent updated');
                $state.go("app.listMarketEvent");
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Ensure form fields are set for view and edit
        vm.toViewMarketEvent = function() {
            vm.marketEvent = MarketEvent.get({marketEventId: $stateParams.marketEventId}, vm.successResponse, vm.errorResponse);
            vm.setFormFields(true);
        };

        vm.toEditMarketEvent = function() {
            vm.marketEvent = MarketEvent.get({marketEventId: $stateParams.marketEventId}, vm.successResponse, vm.errorResponse);
            vm.setFormFields(false);
        };
        
        vm.errorResponse = function(response) {
			// Error
			if (response.status === 404) {
				logger.error("Not found");
			} else if (response.status === 403) {
				logger.error("No access");
			} else {
				logger.error("Error: " + response);
			}
		}

		vm.successResponse = function(response) {

		}


        // Called to initialize the controller
        activate();

        function activate() {
			
        }
    }

})();
