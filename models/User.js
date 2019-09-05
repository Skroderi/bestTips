const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: new Date(Date.now()).toLocaleString()
  },
  stats: {
    win: Number,
    return: Number,
    lose: Number,
    profit: Number
  }
});

module.exports = User = mongoose.model("user", UserSchema);
