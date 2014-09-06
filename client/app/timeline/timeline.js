'use strict';

angular.module('timelineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/',
        templateUrl: 'app/timeline/timeline.html',
        controller: 'TimelineCtrl',
        authenticate: true
      });
  });