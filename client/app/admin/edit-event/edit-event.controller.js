'use strict';

angular.module('timelineApp')
  .controller('EditEventCtrl', function ($scope, $http, TimelineEvent) {
    $http.get('/api/timeline-events/')
    .success(function(data) {
      $scope.dates = data;
    })
    .error(function(err) {
      console.log(err);
    });

    $scope.startOpen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.startOpened = true;
    };
    $scope.endOpen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.endOpened = true;
    };
    $scope.getTimelineEvent = function() {
      $scope.timelineEvent = TimelineEvent.get({id: $scope.selectEvent});
    };

    $scope.check = function() {
      console.log($scope);
    };

    $scope.updateEvent = function(form) {
      if (form.$valid) {
        TimelineEvent.update($scope.timelineEvent, function(success) {
          // console.log(success);
          $scope.alerts.push({type: 'success', msg: 'Event successfully updated.'});
          $scope.timelineEvent = {};
        }, 
        function (err) {
          console.log(err);
          $scope.alerts.push({type: 'danger', msg: err});
        });
      }
    }
  });
