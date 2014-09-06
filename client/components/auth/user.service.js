'use strict';

angular.module('timelineApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      approve: {
        method: 'PUT',
        params: {
          controller: 'approve'
        }
      }
	  });
  });
