angular.module('timelineApp')
 .controller('ModalCtrl', function($scope, $modalInstance, $cookieStore) {
    $scope.ok = function(arg) {
      console.log(arg);
      $modalInstance.close();
    }

    $scope.setCookie = function(name) {
      $cookieStore.put(name, true);
      $modalInstance.close();
    }
 })