const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const productService = require("../controllers/productController");

router.get("/", async (req, res) => {
  try {
    const result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", productService.getAll);
router.get("/one/:id", productService.getOne);
router.get("/filter", productService.filter);
router.get("/pagination/:page", productService.pagination);
router.get("/maxpage", productService.getMaxPage);
router.post("/one", authMiddleware.auth, authMiddleware.admin, productService.createOne);
router.post("/many", authMiddleware.auth, authMiddleware.admin, productService.createMany);
router.put("/:id", authMiddleware.auth, authMiddleware.admin, productService.updateOne);
router.delete("/:id", authMiddleware.auth, authMiddleware.admin, productService.deleteOne);

module.exports = router;


