const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const cartService = require("../controllers/cartController");

router.get("/", authMiddleware.auth, cartService.getAll);
router.get("/:id", authMiddleware.auth, cartService.getOne);
router.get("/filter", authMiddleware.auth, cartService.filter);
router.post("/one", authMiddleware.auth, cartService.createOne);
router.post("/many", authMiddleware.auth, cartService.createMany);
router.put("/:id", authMiddleware.auth, cartService.updateOne);
router.delete("/:id", authMiddleware.auth, cartService.deleteOne);

module.exports = router;