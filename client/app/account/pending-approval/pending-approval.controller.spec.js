'use strict';

describe('Controller: PendingApprovalCtrl', function () {

  // load the controller's module
  beforeEach(module('timelineApp'));

  var PendingApprovalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PendingApprovalCtrl = $controller('PendingApprovalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
