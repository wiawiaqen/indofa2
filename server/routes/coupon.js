const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const couponService = require("../controllers/couponController");

router.get("/", couponService.getAll);
router.get("one/:id", couponService.getOne);
router.get("/filter", couponService.filter);
router.post("/one", authMiddleware.auth, authMiddleware.admin, couponService.createOne);
router.post("/many", authMiddleware.auth, authMiddleware.admin, couponService.createMany);
router.put("/:id", authMiddleware.auth, authMiddleware.admin, couponService.updateOne);
router.delete("/:id", authMiddleware.auth, authMiddleware.admin, couponService.deleteOne);

module.exports = router;