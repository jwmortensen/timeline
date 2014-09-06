'use strict';

angular.module('timelineApp')
  .controller('ManageUsersCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      console.log(users);
      $scope.users = users;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.approvedToggle = function(user) {
      user.approved = !user.approved;
      console.log(user._id);
      User.approve({ id: user._id }, {});

    }
  });
