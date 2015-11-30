/**=========================================================
 * Module: masked,js
 * Initializes the jQuery UI slider controls
 =========================================================*/

angular.module('app.vendor').directive('uiSlider', function() {
  return {
    restrict: 'A',
    controller: function($scope, $element) {
      var $elem = $($element);
      if($.fn.slider)
        $elem.slider();
    }
  };
});
