const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Schema = new Schema({
  random: { type: String, required: true },
  placeHolder: String,
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", Schema);

module.exports = Item;
