const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const productService = require("../controllers/productController");

router.get("/", productService.getAll);
router.get("/one/:id", productService.getOne);
router.get("/filter", productService.filter);
router.get("/pagination/:page", productService.pagination);
router.get("/maxpage", productService.getMaxPage);
router.post("/one", productService.createOne);
router.post("/many", productService.createMany);
router.put("/:id",  productService.updateOne);
router.delete("/:id", productService.deleteOne);

module.exports = router;