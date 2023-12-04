const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Code is Required"],
    },

    type: {
      type: String,
      enum: ["percent", "fixed"],
    },

    discount: {
      type: Number,
      required: [true, "Discount is Required"],
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
