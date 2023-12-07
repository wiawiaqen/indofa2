const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    Reviewer: {
      type: String,
      required: [true, "Title is Required"],
    },

    Date: {
      type: Date,
      required: [true, "Date is Required"],
    },

    Rating: {
      type: Number,
      required: [true, "Rating is Required"],
    },

    title: {
      type: String,
      required: [true, "Title is Required"],
    },

    Content: {
      type: String,
      required: [true, "Content is Required"],
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
