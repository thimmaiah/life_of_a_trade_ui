/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

angular.module('app.vendor').directive('filestyle', function() {
  return {
    restrict: 'A',
    controller: function($scope, $element) {
      var $elem = $($element);
      $elem.filestyle({
        classInput: $elem.data('classinput')
      });
    }
  };
});
