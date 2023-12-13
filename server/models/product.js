const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },

    description: {
      type: String,
      required: [true, "Description is Required"],
    },

    imgbase64: {
      type: String,
      required: [true, "Product image is Required"],
    },

    price: {
      type: Number,
      required: [true, "Product price is Required"],
    },

    d_price: {
      type: Number,
      required: [true, "Product price is Required"],
      default: -1,
    },

    f_description: {
      type: String,
      required: [true, "Description is Required"],
    },

    f_imgbase64: {
      type: String,
      required: [true, "Product image is Required"],
    },

    category: {
      type: String,
      required: [true, "Product image is Required"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
