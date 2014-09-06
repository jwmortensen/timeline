'use strict';

describe('Controller: AddEventCtrl', function () {

  // load the controller's module
  beforeEach(module('timelineApp'));

  var AddEventCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddEventCtrl = $controller('AddEventCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
