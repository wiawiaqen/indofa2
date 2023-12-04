const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const morgan = require("morgan");
const cors = require("cors");
const { globalErrHandler } = require("./utils/globalErrHandler");
require("dotenv").config();

const app = express();

// Database Connection
const db = require("./config/db");
db.connect();

// Routes
const routes = require("./route/auth");

// Passport Strategies
var opts = {};
opts.jwtFromRequest = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};
opts.secretOrKey = process.env.JWT_SECRET;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    // Assuming CheckUser is a function defined elsewhere
    if (CheckUser(jwt_payload.data)) {
      return done(null, jwt_payload.data);
    } else {
      return done(null, false);
    }
  })
);

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

// Middleware
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
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(morgan("combined"));
app.use(express.json());

// Use routes
app.use("/api", routes);

app.use(globalErrHandler);

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
      const token = jwt.sign(
        { _id: foundOrCreatedUser._id },
        process.env.JWT_SECRET
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.redirect("/");
    } catch (error) {
      console.error("Error during authentication:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Listen To Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
