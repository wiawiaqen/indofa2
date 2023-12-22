const { Router } = require("express");
const bcrypt = require("bcryptjs");

const Product = require("../models/product");
const router = Router();

router.post('/getProducts', async (req, res) => {
  try {
    let payload = req.body.payload;

    // Log received data from client
    console.log('Data received from client:', payload);
    console.log({ $regex: new RegExp('.*' + payload + '.*', 'i') })
    let search = await Product.find(
      { name: { $regex: new RegExp('.*' + payload + '.*', 'i') } },
      { id: 1, name: 1 }
    ).exec();

    search = search.slice(0, 10);

    console.log('Search result:', search); // Log search result

    res.send({ payload: search });
  } catch (error) {
    console.error('Error in getProducts:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
