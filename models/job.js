const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  company: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
    }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;