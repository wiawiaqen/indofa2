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
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
// Database Connection
const db = require("./config/db");

db.connect();

// Routes
const routes = require("./routes/auth");

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
      callbackURL: "http://localhost:5000/api/googleRedirect",
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

app.use(morgan("combined"));
app.use(express.json());

app.use(globalErrHandler);

// Use routes
app.use("/api", routes);


app.get("/", (req, res) => {
  res.send("hello world");
});

// Listen To Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
