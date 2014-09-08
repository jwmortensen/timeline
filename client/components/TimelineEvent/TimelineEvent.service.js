'use strict';

angular.module('timelineApp')
  .factory('TimelineEvent', function ($resource) {
    return $resource('/api/events/:id/:controller', {
      id: '@_id'
    }, {

    });
  });
