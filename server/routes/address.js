const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const addressService = require("../controllers/addressController");

router.get("/", authMiddleware.auth, addressService.getAll);
router.get("one/:id", authMiddleware.auth, addressService.getOne);
router.get("/filter", authMiddleware.auth, addressService.filter);
router.post("/one", authMiddleware.auth, addressService.createOne);
router.post("/many", authMiddleware.auth, addressService.createMany);
router.put("/:id", authMiddleware.auth, addressService.updateOne);
router.delete("/:id", authMiddleware.auth, addressService.deleteOne);

module.exports = router;