const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologySchema = new Schema({
  url: {
    name: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "Job"
    }
});

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;