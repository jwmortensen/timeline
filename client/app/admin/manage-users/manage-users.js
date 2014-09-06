'use strict';

angular.module('timelineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-users', {
        url: '/manage-users',
        templateUrl: 'app/admin/manage-users/manage-users.html',
        controller: 'ManageUsersCtrl',
        admin: true
      });
  });