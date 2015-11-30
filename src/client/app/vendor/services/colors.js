/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/
 
angular.module('app.vendor').factory('colors', ['APP_COLORS', function(colors) {
  
  return {
    byName: function(name) {
      return (colors[name] || '#fff');
    }
  };

}]);
