const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name:String,
  timeStart:String,
  timeEnd:String,
  day:[String],
  place:String,
  instructor:String,
  author: {
    type:Schema.Types.ObjectId,
    ref:"users"
  }
});

module.exports = mongoose.model('courses',courseSchema);
