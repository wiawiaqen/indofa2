const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
    },
    content: [
      {
        content_title: {
          type: String,
          required: [true, "Title is Required"],
        },
        content_body: {
          type: String,
          required: [true, "Content is Required"],
        },
        base64_img: {
          type: String,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
