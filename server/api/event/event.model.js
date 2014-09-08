'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  startDate: String,
  endDate: String,
  headline: String,
  text: String,
  tag: String,
  classname: String,
  asset: {
    media: String,
    thumbnail: String,
    credit: String,
    caption: String
  },
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);