const express = require("express");
const Product = require("./models/Product");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}, "name price");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

module.exports = router;
