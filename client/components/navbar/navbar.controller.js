'use strict';

angular.module('timelineApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];
    $scope.adminTools = [{
      'title': 'Add Event',
      'state': 'add-event'
    },
    {
      'title': 'Edit Event',
      'state': 'edit-event'
    },
    {
      'title': 'Delete Event',
      'state': 'delete-event'
    },
    {
      'title': 'Manage Users',
      'state': 'manage-users'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });