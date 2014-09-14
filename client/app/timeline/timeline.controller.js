'use strict';

angular.module('timelineApp')
  .controller('TimelineCtrl', function ($scope, $cookieStore) {
    $scope.timeline = '/api/timeline-events/all/timeline-data?access_token=' + $cookieStore.get('token');
  });
