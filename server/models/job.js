const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
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