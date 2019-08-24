const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipSchema = new Schema({
  category: String,
  id: String,
  firstTeam: String,
  secondTeam: String,
  date: Date,
  time: String,
  betOn: String,
  odd: Number,
  likes: Number,
  unLikes: Number,
  probability: String,
  voted: Boolean,
  author: String,
  current: true
});

module.exports = Tip = mongoose.model("tip", TipSchema);
