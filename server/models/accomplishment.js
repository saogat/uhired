const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accomplishmentSchema = new Schema({
  resource: [{
  type: Schema.Types.ObjectId,
    ref: "Resource"
  }]
});

const Accomplishment = mongoose.model("Accomplishment", accomplishmentSchema);

module.exports = Accomplishment;