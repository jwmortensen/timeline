'use strict';

var _ = require('lodash');
var TimelineEvent = require('./timeline-event.model');

// Get list of timeline-events
exports.index = function(req, res) {
  console.log('timeline-events index')
  TimelineEvent.find(function (err, timelineEvents) {
    if(err) { return handleError(res, err); }
    return res.json(200, timelineEvents);
  });
};

// Get a single timeline-event
exports.show = function(req, res) {
  TimelineEvent.findById(req.params.id, function (err, timelineEvent) {
    if(err) { return handleError(res, err); }
    if(!timelineEvent) { return res.send(404); }
    return res.json(timelineEvent);
  });
};

// Creates a new timeline-event in the DB.
exports.create = function(req, res) {
  TimelineEvent.create(req.body, function(err, timelineEvent) {
    if(err) { return handleError(res, err); }
    return res.json(201, timelineEvent);
  });
};

// Updates an existing timeline-event in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  TimelineEvent.findById(req.params.id, function (err, timelineEvent) {
    if (err) { return handleError(res, err); }
    if(!timelineEvent) { return res.send(404); }
    var updated = _.merge(timelineEvent, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, timelineEvent);
    });
  });
};

// Deletes a timeline-event from the DB.
exports.destroy = function(req, res) {
  TimelineEvent.findById(req.params.id, function (err, timelineEvent) {
    if(err) { return handleError(res, err); }
    if(!timelineEvent) { return res.send(404); }
    timelineEvent.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.timelineData = function(req, res) {
  TimelineEvent.find({active: true}, function (err, timelineEvents) {
    if (err) { return handleError(res, err); }
    var timelineData = {
      'timeline': 
      {
        'headline': 'Jane Sequoia Mortensen',
        'type': 'default',
        'text': ' ',
        'date': timelineEvents
      }
    };
    return res.json(200, timelineData);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
