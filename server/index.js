// const express = require("express");
// const app = express();
// const port = 4000;


// // ----------DATABASE PART-------------
// const DB_URL_CONNECTION = "mongodb://127.0.0.1:27017";
// const DB_NAME = "INDOFA";
// const PRODUCT_COLLECTION_NAME = "Product";
// const { MongoClient, ObjectId } = require('mongodb');
// const client = new MongoClient(DB_URL_CONNECTION);
// client.connect();
// const database = client.db(DB_NAME);
// const product_collection = database.collection(PRODUCT_COLLECTION_NAME);

// // ----------SERVER CONFIGURATION-------------
// const morgan = require("morgan");
// app.use(morgan("combined"));
// app.set("trust proxy", true);

// const bodyParser = require("body-parser");
// app.use(bodyParser.json({ limit: "20mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

// app.use(express.json({ limit: "20mb" }));
// app.use(express.urlencoded({ limit: "20mb" }));

// const cors = require("cors");
// app.use(cors());



// // ----------API-------------
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// app.get("/", cors(), async (req, res) =>{
//     res.send("vjp pro")
// })

const express = require("express");
const app = express();

//
const apiError = require("./utils/apiError");
const { globalErrHandler } = require("./utils/globalErrHandler");

// access environment variables
require("dotenv").config();

// connect to database
require("./config/database");

// middleware
app.use(express.json());

// routes
const authRouters = require("./routes/auth");
const userRouters = require("./routes/User");
const categoryRouters = require("./routes/Category");
const postRouters = require("./routes/Post");
const commentRouters = require("./routes/Comment");

// routes middlware
app.use("/api/users", userRouters);
app.use("/api/auth", authRouters);
app.use("/api/categories", categoryRouters);
app.use("/api/posts", postRouters);
app.use("/api/comments", commentRouters);

// 404 error
app.all("*", (req, res, next) => {
  // create error
  const err = new apiError(`Can't find this route ${req.originalUrl}`, 400);
  // send it to Global errors handling middlware
  next(err);
});

// Global Error Handlers Middleware
app.use(globalErrHandler);

// Listen To Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});