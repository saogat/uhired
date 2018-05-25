const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  accomplishment: {
    type: Schema.Types.ObjectId,
      ref: "Accomplishment"
    },
  resource: [{
  type: Schema.Types.ObjectId,
    ref: "Resource"
  }],
  job: [{
    type: Schema.Types.ObjectId,
      ref: "Job"
    }]
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;