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

    d_max: {
      type: Number,
      required: [true, "Max Discount is Required"],
      default: -1,
    },

    min_order: {
      type: Number,
      required: [true, "Min Order is Required"],
      default: 0,
    },

    active: {
      type: Boolean,
      default: true,
    },

    create_at: {
      type: Date,
      default: Date.now,
    },

    update_at: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

CouponSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});
const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
