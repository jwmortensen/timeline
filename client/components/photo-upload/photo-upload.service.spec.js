'use strict';

describe('Service: photoUpload', function () {

  // load the service's module
  beforeEach(module('timelineApp'));

  // instantiate service
  var photoUpload;
  beforeEach(inject(function (_photoUpload_) {
    photoUpload = _photoUpload_;
  }));

  it('should do something', function () {
    expect(!!photoUpload).toBe(true);
  });

});
