angular.module('app.vendor').directive('animateOnChange', function($animate) {
  return function(scope, elem, attr) {
      scope.$watch(attr.animateOnChange, function(nv,ov) {
        if (nv!=ov) {
          var c = nv > ov?'change-up':'change';
          $animate.addClass(elem,c, function() {
            $animate.removeClass(elem,c);
          });
        }
      })  
  }  
})
