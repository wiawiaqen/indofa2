const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const productService = require("../controllers/productController");

router.get("/", productService.getAll);
router.get("/:id", productService.getOne);
router.get("/filter", productService.filter);
router.post("/one", authMiddleware.auth, authMiddleware.admin, productService.createOne);
router.post("/many", authMiddleware.auth, authMiddleware.admin, productService.createMany);
router.put("/:id", authMiddleware.auth, authMiddleware.admin, productService.updateOne);
router.delete("/:id", authMiddleware.auth, authMiddleware.admin, productService.deleteOne);

module.exports = router;