const express = require("express");
const {
  createNewProduct,
  getAllProducts,
} = require("../controllers/productsCont");
const { uploadImage } = require("../controllers/imageUpload");
const router = express.Router();

router.route("/").get(getAllProducts).post(createNewProduct);
router.route("/upload").post(uploadImage);

module.exports = router;
