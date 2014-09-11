'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AwsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Aws', AwsSchema);