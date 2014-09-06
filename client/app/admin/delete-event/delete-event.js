'use strict';

angular.module('timelineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('delete-event', {
        url: '/delete-event',
        templateUrl: 'app/admin/delete-event/delete-event.html',
        controller: 'DeleteEventCtrl'
      });
  });