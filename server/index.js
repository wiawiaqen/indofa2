const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
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
const db = require("./config/db_config");

db.connect();

// Routes
const routes = require("./routes/auth");
const passport = require("./config/passport");

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
