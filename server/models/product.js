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

ProductSchema.statics.excludeProduct = async function (categoryId, excludeProductId) {
  const query = { category: categoryId, _id: { $ne: excludeProductId } };
  return this.find(query);
};

ProductSchema.pre("save", async function (next) {
  const fs = require("fs");
  const path = require("path");

  if (this.imgbase64) {
    const imgPath = path.join(__dirname, `CUQUA/${this.imgbase64}.png`);
    const imgData = fs.readFileSync(imgPath, { encoding: "base64" });
    this.imgbase64 = "data:image/jpeg;base64," + imgData;
    this.imgbase64_reduce = await resizeBase64Image(this.imgbase64, 250, 250);
  }

  if (this.f_imgbase64) {
    const fImgPath = path.join(__dirname, `FCUQUA/${this.f_imgbase64}.png`);
    const fImgData = fs.readFileSync(fImgPath, { encoding: "base64" });
    this.f_imgbase64 = "data:image/jpeg;base64," + fImgData;
  }

  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;