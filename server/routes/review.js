const reviewController = require("../controller/reviewController");
const express = require("express");
const router = express.Router();

router.post("/create-review", reviewController.createReview);
router.get("/get-review/:id", reviewController.getReviewId);
router.get("/get-all-review", reviewController.getAllReview);
router.patch("/update-review/:id", reviewController.updateReview);
router.delete("/delete-review/:id", reviewController.deleteReview);

module.exports = router;
