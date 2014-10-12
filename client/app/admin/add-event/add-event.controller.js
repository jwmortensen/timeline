'use strict';

angular.module('timelineApp')
  .controller('AddEventCtrl', function ($scope, $filter, TimelineEvent) {
    $scope.timelineEvent = {
      asset: {}
    };
    $scope.closeAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };

    $scope.addEvent = function(form) {
      if (form.$valid) {
        $scope.timelineEvent.startDate = $filter('date')($scope.timelineEvent.startDate, 'yyyy,MM,dd');
        $scope.timelineEvent.endDate = $filter('date')($scope.timelineEvent.endDate, 'yyyy,MM,dd');
        TimelineEvent.save($scope.timelineEvent,
          function(data) {
            $scope.alerts.push({type: 'success', msg: 'Event added'});
            $timeout(function() {
              $scope.alerts.splice($scope.alerts.indexOf())
            })
            $scope.timelineEvent = {
              asset: {}
            };
          }, function(err) {
            $scope.alerts.push({type: 'danger', msg: err});
            console.log(err);
          });
      }
    };
    $scope.check = function() {
      console.log($scope.timelineEvent);
    }
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
  });
