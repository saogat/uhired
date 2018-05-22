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
  },
  //owner is the creator of the resource
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
    },
  description: {
      type: String
  },
  notes: [{
      type: Schema.Types.ObjectId,
      ref: "Note"
      }],
  done: {
    type: Boolean,
    default: false
  }
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;