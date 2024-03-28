const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id : String,
  email : String,
  name: String,
  password: String,
  avatar_img : String,
  createdAt: {type:Date, default:Date.now()},
  updatedAt: Date,
  currency_type: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel