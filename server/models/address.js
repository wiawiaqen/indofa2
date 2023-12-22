const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },

    phone: {
      type: String,
      required: [true, "Phone is Required"],
    },
    
    street: {
      type: String,
      required: [true, "Street is Required"],
    },

    city: {
      type: String,
      required: [true, "City is Required"],
    },

    district: {
      type: String,
      required: [true, "District is Required"],
    },

    ward: {
      type: String,
      required: [true, "Ward is Required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    default: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
