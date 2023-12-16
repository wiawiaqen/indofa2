const { Router } = require("express");
const bcrypt = require("bcryptjs");

const Product = require("../models/product");
const router = Router();

router.post('/getProducts', async (req, res) => {
  let payload = req.body.payload; // Sử dụng query parameter
  let search = await Product.find({ name: { $regex: new RegExp('^' + payload + '.*', 'i') } })
    .exec();

  search = search.slice(0, 10);
  res.send({ payload: search });
});

module.exports = router;