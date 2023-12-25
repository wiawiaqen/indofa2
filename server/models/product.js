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
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);
async function resizeBase64Image(base64Str, width, height) {
  try {
    const image = await jimp.read(
      Buffer.from(base64Str.split(",")[1], "base64")
    );
    const resizedImage = await image
      .resize(width, height)
      .getBase64Async(jimp.MIME_JPEG);

    return resizedImage;
  } catch (error) {
    console.error("Error resizing image:", error);
    throw error;
  }
}

ProductSchema.pre("save", async function (next) {

  if (this.imgbase64) {
    this.imgbase64_reduce = await resizeBase64Image(this.imgbase64, 250, 250);
  }


  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
