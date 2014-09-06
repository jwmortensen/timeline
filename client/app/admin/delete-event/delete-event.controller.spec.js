'use strict';

describe('Controller: DeleteEventCtrl', function () {

  // load the controller's module
  beforeEach(module('timelineApp'));

  var DeleteEventCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteEventCtrl = $controller('DeleteEventCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
