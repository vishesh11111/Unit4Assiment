const express = require("express");
const router = express.Router();
const client = require("../configs/redis");
const Product = require("../models/product.model");
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const products = await Product.find().lean().exec();

    client.set("products", JSON.stringify(products));
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/", async (req, res) => {
  try {
    client.get("products", async (error, redisData) => {
      console.log('error:', error)
      if (redisData) {
        const products = JSON.parse(redisData);
        return res.status(200).send({ products: products, redis: true });
      } else {
        try {
          const product = await Product.find().lean().exec();
          return res.status(200).send({ product: product, redis: false });
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
