const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
var opts = {};

opts.jwtFromRequest = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};
opts.secretOrKey = "secret";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
const { globalErrHandler } = require("./utils/globalErrHandler");

// connect to database
require("./config/db_config");
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    if (CheckUser(jwt_payload.data)) {
      return done(null, jwt_payload.data);
    } else {
      return done(null, false);
    }
  })
);

//// middleware
// const apiError = require("./utils/apiError");
// 404 error
// app.all("*", (req, res, next) => {
//   // create error
//   const err = new apiError(`Can't find this route ${req.originalUrl}`, 400);
//   // send it to Global errors handling middlware
//   next(err);
// });

// Global Error Handlers Middleware
app.use(globalErrHandler);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:5000/googleRedirect",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

const User = require("./models/user");
async function FindOrCreate(userData) {
  try {
    let user = await User.findOne({
      email: userData.email,
      provider: userData.provider,
    });

    if (!user) {
      user = await User.create(userData);
      console.log("User created");
    } else {
      console.log("User found");
    }

    return user;
  } catch (error) {
    console.error("Error in FindOrCreate:", error);
    throw error;
  }
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/googleRedirect",
  passport.authenticate("google"),
  async (req, res) => {
    let user = {
      name: req.user.name.givenName,
      email: req.user._json.email,
      provider: "google",
    };

    try {
      const foundOrCreatedUser = await FindOrCreate(user);
      let token = jwt.sign(
        { data: foundOrCreatedUser },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("jwt", token);
      res.redirect("/");
    } catch (error) {
      console.error("Error during authentication:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error in session destruction:", err);
      res.status(500).send("Error signing out");
    } else {
      res.clearCookie("connect.sid");
      res.redirect("/");
    }
  });
});

// Listen To Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
