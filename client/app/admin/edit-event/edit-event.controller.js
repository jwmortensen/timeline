'use strict';

angular.module('timelineApp')
  .controller('EditEventCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.dates = [{
      id: 1,
      headline: 'Testing'
    }];
  });
