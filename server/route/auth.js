const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = Router();

router.post("/register", async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;
  let cfpassword = req.body.cfpassword;
  let saveSession = req.body.save;
  if (!(password === cfpassword)) {
    return res.status(400).send({
      message: "Password does not match",
    });
  }

  const record = await User.findOne({ email: email });
  if (record) {
    return res.status(400).send({
      message: "Email is already registered",
    });
  } else {
    const user = new User({
      name: name,
      email: email,
      password: password,
      provider: "indofa",
      role: "user",
    });

    const result = await user.save();
    // JWt token
    const { _id } = await result.toJSON();
    console.log(_id);
    const token = jwt.sign({ _id: _id }, "secret");
    if (saveSession) {
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 * 10000, // I don't know. Maybe just set it randomly 10000 days cuz I believe this website won't survive that long :D
      });
    } else {
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
    }
    res.send({
      message: "success",
    });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  let saveSession = req.body.save;

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }
  if (user.provider !== "indofa") {
    return res.status(400).send({
      message: "Please login with Google",
    });
  }
  
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "Password is Incorrect",
    });
  }
  const token = jwt.sign({ _id: user._id }, "secret");

  if (saveSession) {
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 * 10000, // I don't know. Maybe just set it randomly 10000 days cuz I believe this website won't survive that long
    });
  } else {
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
  }

  res.send({
    message: "success",
  });
});

router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const claims = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!claims) {
      return res.status(401).send({
        message: "unauthenticated",
      });
    }

    const user = await User.findOne({ _id: claims._id });
    const { hashedPassword, ...data } = await user.toJSON();
    let user_data = {
        name: data.name,
        email: data.email,
        role: data.role,
        provider: data.provider
    }
    res.send(user_data);
  } catch (err) {
    return res.status(401).send({
      message: "unauthenticated",
    });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({
    message: "success",
  });
});
module.exports = router;
