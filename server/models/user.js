const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },

    username: {
      type: String
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email is Required"],
    },

    password: {
      type: String,
    },

    provider: {
      type: String,
      enum: ["google", "indofa"],
      required: [true, "Provider is Required"],
    },
    
    cfpassword: {
      type: String,
      virtual: true,
    },

   
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.password == null) {
    next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
