const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const orderService = require("../controllers/orderController");
const Cart = require("../models/cart");
router.get("/", orderService.getAll);
router.get("one/:id", authMiddleware.auth, orderService.getOne);
router.get("/filter", authMiddleware.auth, orderService.filter);
router.post("/one", authMiddleware.auth, orderService.createOne, (req, res) => {
    Cart.findOne({ user: req.user._id })
        .then((cart) => {
            if (!cart) {
                return 
            } else {
                cart.products = [];
                cart.save();
            }
        })
        .catch((err) => {
        });
}
);
router.post("/many", authMiddleware.auth, orderService.createMany);
router.put("/:id", authMiddleware.auth, orderService.updateOne);
router.delete("/:id", authMiddleware.auth, orderService.deleteOne);

module.exports = router;