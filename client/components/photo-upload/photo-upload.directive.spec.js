'use strict';

describe('Directive: photoUpload', function () {

  // load the directive's module and view
  beforeEach(module('timelineApp'));
  beforeEach(module('components/photo-upload/photo-upload.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<photo-upload></photo-upload>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the photoUpload directive');
  }));
});