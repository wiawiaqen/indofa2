const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const { globalErrHandler } = require("./utils/globalErrHandler");
const apiError = require("./utils/apiError");
require("dotenv").config();

// Config
const db = require("./config/db_config");
const passport = require("./config/passport_config");

// Connect to DB
db.connect();

// Routes
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/review");
const productRoute = require("./routes/product");


// Middleware
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
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

// Use routes
app.use("/api/auth", authRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("hello world");
});


// Handle route error
app.all("*", (req, res, next) => {
  const err = new apiError(`Can't find this route ${req.originalUrl}`, 400);
  next(err);
});

// Global Error Handlers Middleware
app.use(globalErrHandler);

// Listen To Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
