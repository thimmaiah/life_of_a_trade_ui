(function () {
    'use strict';

    angular
        .module('app.position')
        .controller('PositionController', PositionController);

    PositionController.$inject = ['logger',
        '$stateParams',
        '$state',
        'Position',
        'TableSettings',
        'PositionForm'];
    /* @ngInject */
    function PositionController(logger,
        $stateParams,
        $state,
        Position,
        TableSettings,
        PositionForm) {

        var vm = this;

        // This is used to load the data into the table. 
        // See http://ng-table.com/ and app/core/services/table.settings.service.js
        vm.tableParams = TableSettings.getParams(Position);
        vm.position = {};

        // Setup the form fields. Used by angular-formly to create the fields for the form. 
        // See http://angular-formly.com/ and services/position.form.client.service.js and views/create.html
        vm.setFormFields = function(disabled) {
            vm.formFields = PositionForm.getFormFields(disabled);
        };

        // Create new Position        
        vm.create = function() {
            // Create new Position object
            var position = new Position(vm.position);

            // Redirect after save
            position.$save(function(response) {
                logger.success('Position created');
                $state.go("app.viewposition", {'positionId': response.id});
            }, function(errorResponse) {
                vm.error = errorResponse;
            });
        };

        // Remove existing Position
        vm.remove = function(position) {

            if (position) {
                position = Position.get({positionId:position.id}, function() {
                    position.$remove(function() {
                        logger.success('Position deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.position.$remove(function() {
                    logger.success('Position deleted');
                    $state.go("app.listposition");
                });
            }

        };

        // Update existing Position
        vm.update = function() {
            var position = vm.position;

            position.$update(function() {
                logger.success('Position updated');
                $state.go("app.listposition");
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Ensure form fields are set for view and edit
        vm.toViewPosition = function() {
            vm.position = Position.get({positionId: $stateParams.positionId});
            vm.setFormFields(true);
        };

        vm.toEditPosition = function() {
            vm.position = Position.get({positionId: $stateParams.positionId});
            vm.setFormFields(false);
        };

        // Called to initialize the controller
        activate();

        function activate() {
            logger.info('Activated Position View');
        }
    }

})();
