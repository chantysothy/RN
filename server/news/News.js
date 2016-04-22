var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ValidationError = require('./../errors').ValidationError;

var NewsSchema = new Schema({
  _key: { type: String },
  title: { type: String, required: true },
  author: { type: String },
  article: { type: String, required: true },
  date: { type: Date },
  updateDate: { type: Date, default: Date.now }
});

mongoose.model('news', NewsSchema);

var NewsModel = mongoose.model('news');
module.exports = NewsModel;
