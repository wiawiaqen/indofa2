const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewer: {
      type: String,
      required: [true, "Reviewer is Required"],
    },

    date: {
      type: Date,
      default: Date.now,
      required: [true, "Date is Required"],
    },

    rating: {
      type: Number,
      required: [true, "Rating is Required"],
    },

    title: {
      type: String,
      required: [true, "Title is Required"],
    },

    content: {
      type: String,
      required: [true, "Content is Required"],
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
