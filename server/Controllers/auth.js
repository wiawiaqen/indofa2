const dao = require("../utils/modelDAO");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB_URL;
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Connect to MongooDB....");
  })
  .catch((err) => {
    console.log(err);
  });


async function CheckUser() {
  let test_user = await User.create({
    name: "test",
    email: "blabla@gmail.com",
    password: "123456",
    provider: "indofa",
  });
  const res_user = await User.findOne({ email: "blabla@gmail.com" });
  console.log(res_user);
  return res_user;
}

exports.CheckUser = CheckUser;
exports.createUser = dao.createOne(user);
exports.updateUser = dao.updateOne(user, "user");
exports.allUsers = dao.getAll(user);
exports.getUser = dao.getOne(user, "user");
exports.deleteUser = dao.deleteOne(user, "user");
