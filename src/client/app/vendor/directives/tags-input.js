/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

angular.module('app.vendor').directive('tagsinput', function() {
  return {
    restrict: 'A',
    controller: function($scope, $element) {
      var $elem = $($element);
      if($.fn.tagsinput)
        $elem.tagsinput();
    }
  };
});
