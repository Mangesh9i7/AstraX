const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holdingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: 541.15,
  net: String,
  day: String,
});

module.exports = mongoose.model("Holdings", holdingSchema);
