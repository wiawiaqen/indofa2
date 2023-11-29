const mongoose = require("mongoose");


// Create Schema
const AccountSchema = new mongoose.Schema(
  {
    UserName: String,
    Password:String
  },{
    collection: "account"
  }
);


// @desc Create Model
const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
