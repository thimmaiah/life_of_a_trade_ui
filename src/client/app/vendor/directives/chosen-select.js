/**=========================================================
 * Module: chosen-select.js
 * Initializes the chose select plugin
 =========================================================*/

angular.module('app.vendor').directive('chosen', function() {
  return {
    restrict: 'A',
    controller: function($scope, $element) {
      var $elem = $($element);
      if($.fn.chosen)
        $elem.chosen();
    }
  };
});