// routes/categories.js
const express = require("express");
const categoriesData = require("./data");
const router = express.Router();

// Rota para obter uma lista de categories
router.get("/", (req, res) => {
  res.json(categoriesData);
});

// Rota para obter detalhes de um category específico
router.get("/:id", (req, res) => {
  const categoryId = Number(req.params.id);
  const category = categoriesData.find((category) => category.id === categoryId);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

module.exports = router;
