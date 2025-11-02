const productController = require("../controller/productController");
const express = require("express");
const router = express.Router();

router.get("/get-product/:id", productController.getProductById);
router.get("/get-all-product", productController.getAllProducts);
router.get("/get-product", productController.getProductById);
router.post("/create-product", productController.createProduct);

module.exports = router;
