'use strict';

angular.module('timelineApp')
  .controller('TimelineCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.timeline = '/timeline';
    $scope.timeline =     
    {
      'timeline':
      {
        'headline': 'Jane Sequoia Mortensen',
        'type': 'default',
        'text': '<p>The life of JSM</p>',
        'date': [
          {
            'startDate': '2011,12,10',
            'endDate': '2011,12,11',
            'headline': 'Headline',
            'text': '<p>Body text</p>'
          }
        ]
      }
    };
  });
