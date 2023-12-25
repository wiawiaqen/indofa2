const mongoose = require("mongoose");
const jimp = require("jimp");

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

    imgbase64_reduce: {
      type: String,
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
      enum: [
        "cuqua",
        "hoa",
        "rau",
        "dungcu",
        "dat",
        "chaucustom",
        "gom",
        "treo",
        "nhua",
      ],
      default: "cuqua",
    },

    isActive: {
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

ProductSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
