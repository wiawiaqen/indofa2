const Router = require("express");
const router = Router();
const authMiddleware = require("../middlewares/auth");
const addressService = require("../controllers/addressController");
const Address = require("../models/address");

router.get("/", authMiddleware.auth, addressService.getAll);
router.get("one/:id", authMiddleware.auth, addressService.getOne);
router.get("/filter", authMiddleware.auth, addressService.filter);
router.get("/user", authMiddleware.auth, addressService.getAddressByUser);
router.post("/one", authMiddleware.auth, addressService.createOne);
router.post("/many", authMiddleware.auth, addressService.createMany);
router.put("/:id", authMiddleware.auth, addressService.updateOne);
router.delete("/:id", authMiddleware.auth, addressService.deleteOne);

router.put("/setdefault/:id", authMiddleware.auth, async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    } else {
      address.isDefault = true;
      await address.save();
      res.status(200).json({ data: address });
    }
    userAddress = await Address.find({ user: req.user._id });
    userAddress.forEach(async (address) => {
      address.isDefault = false;
      await address.save();
    });
    // const address = await Address.findById(req.params.id);
    // if (!address) {
    // return res.status(404).json({ error: "Address not found" });
    // }
    // address.isDefault = true;
    // await address.save();
    // res.status(200).json({ data: address });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
