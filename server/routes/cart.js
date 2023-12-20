const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const cartService = require("../controllers/cartController");
const { Cart } = require("./models/cart");

router.get("/", authMiddleware.auth, cartService.getAll);
router.get("one/:id", authMiddleware.auth, cartService.getOne);
router.get("/filter", authMiddleware.auth, cartService.filter);
router.post("/one", authMiddleware.auth, cartService.createOne);
router.post("/many", authMiddleware.auth, cartService.createMany);
router.put("/:id", authMiddleware.auth, cartService.updateOne);
router.delete("/:id", authMiddleware.auth, cartService.deleteOne);

router.get("/usercart/:id", authMiddleware.auth, (req, res) => {
    const { id } = req.params;
    let userCart = Cart.find({ user: id })
    if (!userCart) {
        const cart = new Cart({
            user: id,
            product: [],
        });
        cart.save();
        res.status(200).json({ data: cart });
    }
    else {
        res.status(200).json({ data: userCart }
            .populate("user")
            .populate("product", "name price"))
        .then((cart) => {
            res.status(200).json(cart);
        })
        .catch((err) => {
            res.status(500).json(err);
        });;
    }
});

module.exports = router;