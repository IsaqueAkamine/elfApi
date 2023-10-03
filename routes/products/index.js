// routes/products.js
const express = require("express");
const productsData = require("./data");
const router = express.Router();

// Rota para obter uma lista de products
router.get("/", (req, res) => {
  res.json(productsData);
});

// Rota para obter detalhes de um product específico
router.get("/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = productsData.find((product) => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

module.exports = router;
