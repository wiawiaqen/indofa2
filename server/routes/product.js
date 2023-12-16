const { Router } = require("express");
const router = Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// router.get("/", reviewService.getAll);
// router.get("/:id", reviewService.getOne);
// router.post("/", reviewService.createOne);
// router.put("/:id", reviewService.updateOne);
// router.delete("/:id", reviewService.deleteOne);

// module.exports = router;