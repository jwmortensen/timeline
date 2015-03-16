'use strict';

var _ = require('lodash');
var Aws = require('./aws.model');
var crypto = require('crypto');
var config = require('../../config/environment');

// Get list of awss
exports.index = function(req, res) {
  var date = new Date();
  date.setHours(24,0,0,0);
  // .toISOString();
  var policy = new Buffer(JSON.stringify({
      'expiration': date.toISOString(),
      'conditions': [
        { 'acl': 'public-read' },
        { 'bucket': 'jsm-timeline' },
        [ 'starts-with', '$key', '' ],
        [ 'starts-with', '$Content-Type', '' ],
        [ 'content-length-range', 0, 10 * 1024 * 1024 ],
      ]
    })).toString('base64');
  var signature = crypto.createHmac('sha1', config.aws.signature).update(policy).digest('base64');
  res.json({
    policy: policy,
    signature: signature,
    key: config.aws.key
  });
};

// Get a single aws
exports.show = function(req, res) {
  Aws.findById(req.params.id, function (err, aws) {
    if(err) { return handleError(res, err); }
    if(!aws) { return res.send(404); }
    return res.json(aws);
  });
};

// Creates a new aws in the DB.
exports.create = function(req, res) {
  Aws.create(req.body, function(err, aws) {
    if(err) { return handleError(res, err); }
    return res.json(201, aws);
  });
};

// Updates an existing aws in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Aws.findById(req.params.id, function (err, aws) {
    if (err) { return handleError(res, err); }
    if(!aws) { return res.send(404); }
    var updated = _.merge(aws, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, aws);
    });
  });
};

// Deletes a aws from the DB.
exports.destroy = function(req, res) {
  Aws.findById(req.params.id, function (err, aws) {
    if(err) { return handleError(res, err); }
    if(!aws) { return res.send(404); }
    aws.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}