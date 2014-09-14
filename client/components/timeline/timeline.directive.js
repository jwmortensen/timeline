'use strict';

angular.module('timelineApp')
  .directive('timeline', function () {
    return {
      template: '<div id="timeline-embed"></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        var script = document.createElement('script');
        script.src = 'http://s3.amazonaws.com/cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        script.onload = function() {
          console.log(scope.timeline);
          createStoryJS({
            type: 'timeline',
            width: '100%',
            height: '600',
            source: scope.timeline,
            font: 'NixieOne-Ledger'
          });
        };
      }
    };
  });