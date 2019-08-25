const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
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

module.exports = Tip = mongoose.model("tip", TipSchema);
