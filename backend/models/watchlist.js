const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: true,
});

module.exports = mongoose.model("Review", watchlistSchema);
