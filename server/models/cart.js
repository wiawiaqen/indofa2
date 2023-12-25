const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          required: [true, "Quantity is Required"],
        },
      },
    ],

    total: {
      type: Number,
      required: [true, "Total is Required"],
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
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

CartSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
