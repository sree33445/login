const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
