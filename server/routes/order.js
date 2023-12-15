const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const orderService = require("../controllers/orderController");

router.get("/", authMiddleware.auth, orderService.getAll);
router.get("/:id", authMiddleware.auth, orderService.getOne);
router.get("/filter", authMiddleware.auth, orderService.filter);
router.post("/one", authMiddleware.auth, orderService.createOne);
router.post("/many", authMiddleware.auth, orderService.createMany);
router.put("/:id", authMiddleware.auth, orderService.updateOne);
router.delete("/:id", authMiddleware.auth, orderService.deleteOne);

module.exports = router;