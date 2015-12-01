(function () {
    'use strict';

    angular
        .module('app.position')
        .controller('PositionController', PositionController);

    PositionController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Position',
        'TableSettings',
        'PositionForm'];
    /* @ngInject */
    function PositionController(logger,
        $stateParams,
        $location,
        Position,
        TableSettings,
        PositionForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Position);
        vm.position = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = PositionForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Position object
            var position = new Position(vm.position);

            // Redirect after save
            position.$save(function(response) {
                logger.success('Position created');
                $location.path('position/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
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
                    $location.path('/position');
                });
            }

        };

        // Update existing Position
        vm.update = function() {
            var position = vm.position;

            position.$update(function() {
                logger.success('Position updated');
                $location.path('position/' + position.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewPosition = function() {
            vm.position = Position.get({positionId: $stateParams.positionId});
            vm.setFormFields(true);
        };

        vm.toEditPosition = function() {
            vm.position = Position.get({positionId: $stateParams.positionId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Position View');
        }
    }

})();
