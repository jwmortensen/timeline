'use strict';

angular.module('timelineApp')
  .controller('AddEventCtrl', function ($scope, TimelineEvent) {
    $scope.timelineEvent = {};
    $scope.addEvent = function(form) {
      if (form.$valid) {
        TimelineEvent.save($scope.timelineEvent,
          function(data) {
            console.log(data);
          }, function(err) {
            console.log(err);
          });
      }
    };
  });
