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

    type: {
      type: String,
      enum: ["space", "emotion", "season"],
      default: "space",
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

BlogSchema.pre("save", function (next) {
  this.update_at = Date.now();
  next();
});
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
