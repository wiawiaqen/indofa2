const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

function reset_cookie_and_redirect(res) {
  res.cookie("jwt", "", { maxAge: 0 });
  return res.redirect("/login");
}
exports.auth = asyncHandler(async (req, res, next) => {
  const token = req.cookies["jwt"];

  if (!token) {
    reset_cookie_and_redirect(res);
  }

  try {
    const claims = jwt.verify(token, process.env.JWT_SECRET);

    if (!claims) {
      reset_cookie_and_redirect(res);
    }
    const user = User.findOne({ _id: claims._id });

    if (!user) {
      reset_cookie_and_redirect(res);
    }

    next();
  } catch (error) {
    reset_cookie_and_redirect(res);
  }
});

exports.admin = asyncHandler(async (req, res, next) => {
  const token = req.cookies["jwt"];

  if (token) {
    try {
      const userId = jwt.verify(token, process.env.JWT_SECRET);
      const user = User.findOne({ _id: userId._id });

      if (user && user.role === "admin") {
        next();
      } else {
        res.redirect("/");
      }
    } catch (error) {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
});
