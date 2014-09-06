'use strict';

angular.module('timelineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-event', {
        url: '/add-event',
        templateUrl: 'app/admin/add-event/add-event.html',
        controller: 'AddEventCtrl'
      });
  });