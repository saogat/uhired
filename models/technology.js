const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  resources: [{
    type: Schema.Types.ObjectId,
    ref: "Resource"
  }],
  jobs: [{
    type: Schema.Types.ObjectId,
    ref: "Job"
    }]
});

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;