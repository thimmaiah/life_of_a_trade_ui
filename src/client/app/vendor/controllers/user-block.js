angular.module('app.vendor').controller('UserBlockController', ['$scope', function($scope) {

  $scope.userBlockVisible = true;
  
  $scope.$on('toggleUserBlock', function(event, args) {

    $scope.userBlockVisible = ! $scope.userBlockVisible;
    
  });

}]);