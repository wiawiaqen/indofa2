const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const cartService = require("../controllers/cartController");
const Cart = require("../models/cart");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

router.get("/", authMiddleware.auth, cartService.getAll);
router.get("one/:id", authMiddleware.auth, cartService.getOne);
router.get("/filter", authMiddleware.auth, cartService.filter);
router.post("/one", authMiddleware.auth, cartService.createOne);
router.post("/many", authMiddleware.auth, cartService.createMany);
router.put("/:id", authMiddleware.auth, cartService.updateOne);
router.delete("/:id", authMiddleware.auth, cartService.deleteOne);

router.get(
  "/usercart",
  authMiddleware.auth,
  asyncHandler(async (req, res) => {
    try {
      let userCart = await Cart.findOne({ user: req.user._id });

      if (!userCart) {
        if (req.session.cart) {
          const cart = new Cart({
            user: req.user._id,
            products: req.session.cart,
          });
          await cart.save();
          res.status(200).json({ data: cart });
        } else {
          const cart = new Cart({
            user: req.user._id,
            products: [],
          });
          await cart.save();
          res.status(200).json({ data: cart });
        }
      } else {
        userCart = await userCart
          .populate("products.product", "name price")
          .execPopulate();
        res.status(200).json({ data: userCart });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
);

module.exports = router;
