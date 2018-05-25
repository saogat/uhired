const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: "Portfolio"
  },
  resources: [{
    type: Schema.Types.ObjectId,
    ref: "Resource"
  }],
  jobs: [{
    type: Schema.Types.ObjectId,
    ref: "Job"
    }],
  accomplishments: [{
      type: Schema.Types.ObjectId,
      ref: "Resource"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;