const productController = require("../controllers/productController");
const express = require("express");

const router = express.Router();

router.post("/", productController.addProduct);

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getSingleProduct);
router.get("/published", productController.getPublishedProduct);

router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
