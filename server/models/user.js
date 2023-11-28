const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email is Required"],
    },

    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    
    cfpassword: {
      type: String,
      virtual: true,
    },

   
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders",
      },
    ],

    Cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
      },
    ],
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);


// // @desc Last Date  User Created a Post
// UserSchema.pre("findOne", async function (next) {
//   // get the user id
//   const userId = this._conditions._id;
//   // find the post created by the user
//   const posts = await Post.find({ author: userId });

//   if (posts.length > 0) {
//     // get the last post date
//     const lastPostDate = posts[posts.length - 1].createdAt;
//     const lastPostDateStr = lastPostDate.toDateString();

//     // --------- Last Post Date ---------- //

//     UserSchema.virtual("lastPostDate").get(function () {
//       return lastPostDateStr;
//     });

//     // --------- Check if the user inactive for 30 days ---------- //

//     const currentDate = new Date();

//     const diff = (currentDate - lastPostDate) / (1000 * 3600 * 24);

//     if (diff > 30) {
//       UserSchema.virtual("isInactive").get(function () {
//         return true;
//       });
//       await User.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });
//     } else {
//       UserSchema.virtual("isInactive").get(function () {
//         return false;
//       });
//       await User.findByIdAndUpdate(userId, { isBlocked: false }, { new: true });
//     }

//     // --------- Last Active Date Of A User ---------- //

//     const daysAgo = Math.floor(diff);
//     UserSchema.virtual("lastActive").get(function () {
//       if (daysAgo <= 0) {
//         return "today";
//       } else if (daysAgo === 1) {
//         return "yeterday";
//       } else {
//         return `${daysAgo} days ago`;
//       }
//     });

//     // ---------  Upgrade User Account  ---------- //

//     if (posts.length < 10) {
//       await User.findByIdAndUpdate(
//         userId,
//         { userAward: "Bronze" },
//         { new: true }
//       );
//     } else if (posts.length < 20) {
//       await User.findByIdAndUpdate(
//         userId,
//         { userAward: "Silver" },
//         { new: true }
//       );
//     } else {
//       await User.findByIdAndUpdate(
//         userId,
//         { userAward: "Gold" },
//         { new: true }
//       );
//     }
//   }
//   next();
// });

 //@desc Hash Password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/*UserSchema.statics.login = async function(email, password)
{
  const user = await this
}*/
// @desc Create Model
const User = mongoose.model("User", UserSchema);
module.exports = User;
