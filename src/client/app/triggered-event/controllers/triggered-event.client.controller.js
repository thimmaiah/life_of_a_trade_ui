(function() {
	'use strict';

	angular.module('app.triggeredEvent').controller('TriggeredEventController',
			TriggeredEventController);

	TriggeredEventController.$inject = [ 'logger', '$stateParams', '$state',
			'TriggeredEvent', 'TableSettings', 'TriggeredEventForm' ];
	/* @ngInject */
	function TriggeredEventController(logger, $stateParams, $state,
			TriggeredEvent, TableSettings, TriggeredEventForm) {

		var vm = this;

		// This is used to load the data into the table.
		// See http://ng-table.com/ and
		// app/core/services/table.settings.service.js
		vm.tableParams = TableSettings.getParams(TriggeredEvent);
		vm.triggeredEvent = {};

		// Setup the form fields. Used by angular-formly to create the fields
		// for the form.
		// See http://angular-formly.com/ and
		// services/triggered-event.form.client.service.js and views/create.html
		vm.setFormFields = function(disabled) {
			vm.formFields = TriggeredEventForm.getFormFields(disabled);
		};

		// Create new TriggeredEvent
		vm.create = function() {
			// Create new TriggeredEvent object
			var triggeredEvent = new TriggeredEvent(vm.triggeredEvent);

			// Redirect after save
			triggeredEvent.$save(function(response) {
				logger.success('TriggeredEvent created');
				$state.go("app.viewtriggeredEvent", {
					'triggeredEventId' : response.id
				});
			}, function(errorResponse) {
				vm.error = errorResponse;
			});
		};

		// Remove existing TriggeredEvent
		vm.remove = function(triggeredEvent) {

			if (triggeredEvent) {
				triggeredEvent = TriggeredEvent.get({
					triggeredEventId : triggeredEvent.id
				}, function() {
					triggeredEvent.$remove(function() {
						logger.success('TriggeredEvent deleted');
						vm.tableParams.reload();
					});
				});
			} else {
				vm.triggeredEvent.$remove(function() {
					logger.success('TriggeredEvent deleted');
					$state.go("app.listtriggeredEvent");
				});
			}

		};

		// send the TriggeredEvent to the Simulator to generate simulated trades
		vm.sendToSimulator = function(triggeredEvent) {

			triggeredEvent = TriggeredEvent.sendToSimulator({}, triggeredEvent, function() {
				logger.success('TriggeredEvent sent for Simulation');
				vm.tableParams.reload();
			});

		};

		// Update existing TriggeredEvent
		vm.update = function() {
			var triggeredEvent = vm.triggeredEvent;

			triggeredEvent.$update(function() {
				logger.success('TriggeredEvent updated');
				$state.go("app.listtriggeredEvent");
			}, function(errorResponse) {
				vm.error = errorResponse.data.summary;
			});
		};

		// Ensure form fields are set for view and edit
		vm.toViewTriggeredEvent = function() {
			vm.triggeredEvent = TriggeredEvent.get({
				triggeredEventId : $stateParams.triggeredEventId
			}, vm.successResponse, vm.errorResponse);
			vm.setFormFields(true);
		};

		vm.toEditTriggeredEvent = function() {
			vm.triggeredEvent = TriggeredEvent.get({
				triggeredEventId : $stateParams.triggeredEventId
			}, vm.successResponse, vm.errorResponse);
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
			logger.info('Activated TriggeredEvent View');
		}
	}

})();
