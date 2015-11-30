/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

angular.module('app.vendor').controller('PopoverDemoCtrl', ['$scope', function ($scope) {
  
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';

}]);