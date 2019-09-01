const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
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
  current: Boolean,
  status: String
});

module.exports = History = mongoose.model("history", HistorySchema);
