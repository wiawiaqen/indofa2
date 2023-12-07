const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});
const Token = mongoose.model("Token", TokenSchema);
module.exports = Token;
