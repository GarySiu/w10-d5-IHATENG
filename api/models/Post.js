var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  // author: String, //This should refer to a user but since we can't get auth working let's ignore it for now
  title: String,
  link: String,
  summary: String,
  date: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 1 },
  downvotes: { type: Number, default: 0}
});

module.exports = mongoose.model('Post', PostSchema);

