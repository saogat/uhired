const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;