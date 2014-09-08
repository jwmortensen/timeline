'use strict';

describe('Service: TimelineEvent', function () {

  // load the service's module
  beforeEach(module('timelineApp'));

  // instantiate service
  var TimelineEvent;
  beforeEach(inject(function (_TimelineEvent_) {
    TimelineEvent = _TimelineEvent_;
  }));

  it('should do something', function () {
    expect(!!TimelineEvent).toBe(true);
  });

});
