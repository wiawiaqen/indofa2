const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
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
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true,
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
