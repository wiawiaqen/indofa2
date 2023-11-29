const mongoose = require("mongoose");
require('/dotenv/config')
const MONGODB = process.env.DB_URL;
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Connect to MongooDB....");
  })
  .catch((err) => {
    console.log(err);
  });
