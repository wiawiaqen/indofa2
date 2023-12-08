const { Router } = require("express");
const router = Router();

const reviewService = require("../Controllers/reviewController.js");

router.get("/reviews", reviewService.getAll);
router.get("/reviews/:id", reviewService.getOne);
router.post("/reviews", reviewService.createOne);
router.put("/reviews/:id", reviewService.updateOne);
router.delete("/reviews/:id", reviewService.deleteOne);

module.exports = router;