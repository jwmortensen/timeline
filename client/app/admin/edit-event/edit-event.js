'use strict';

angular.module('timelineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-event', {
        url: '/edit-event',
        templateUrl: 'app/admin/edit-event/edit-event.html',
        controller: 'EditEventCtrl',
        admin: true
      });
  });