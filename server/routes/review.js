const { Router } = require("express");
const router = Router();

const reviewService = require("../Controllers/reviewController.js");

router.get("/", reviewService.getAll);
router.get("/:id", reviewService.getOne);
router.post("/", reviewService.createOne);
router.put("/:id", reviewService.updateOne);
router.delete("/:id", reviewService.deleteOne);

module.exports = router;