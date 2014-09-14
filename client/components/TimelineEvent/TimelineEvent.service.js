'use strict';

angular.module('timelineApp')
  .factory('TimelineEvent', function ($resource) {
    return $resource('/api/timeline-events/:id/:controller', {
      id: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  });
