const express = require("express");
const app = express();

const port = 4000;

const DB_URL_CONNECTION = "mongodb://127.0.0.1:27017";
const DB_NAME = "INDOFA";
const PRODUCT_COLLECTION_NAME = "Product";
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(DB_URL_CONNECTION);
client.connect();
const database = client.db(DB_NAME);
const product_collection = database.collection(PRODUCT_COLLECTION_NAME);

const morgan = require("morgan");
app.use(morgan("combined"));
app.set("trust proxy", true);

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb" }));

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", cors(), async (req, res) =>{
    res.send("vjp pro")
})