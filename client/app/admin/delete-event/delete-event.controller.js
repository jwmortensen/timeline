'use strict';

angular.module('timelineApp')
  .controller('DeleteEventCtrl', function ($scope, $http, TimelineEvent) {
    $http.get('/api/timeline-events/')
    .success(function(data) {
      $scope.dates = data;
      // console.log($scope.dates);
    })
    .error(function(err) {
      console.log(err);
    });

    $scope.getTimelineEvent = function() {
      $scope.timelineEvent = TimelineEvent.get({id: $scope.selectEvent});
    };

    $scope.deleteEvent = function() {
      if (confirm('Are you sure you want to delete this event? This cannot be undone.')) {
        $scope.timelineEvent.$remove(function() {
          var dateIndex = _.findIndex($scope.dates, function(date) {
            return date._id === $scope.timelineEvent._id;
          });
          $scope.dates.splice(dateIndex, 1);
          $scope.timelineEvent = null;
          $scope.alerts.push({type: 'success', msg: 'Event successfully deleted.'});
        }, function(err) {
          $scope.alerts.push({type: 'danger', msg: err.message});
        });
      }
    };
  });
