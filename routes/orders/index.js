// routes/orders.js
const express = require("express");
const ordersData = require("./data");
const router = express.Router();

// Rota para obter uma lista de orders
router.get("/", (req, res) => {
  res.json(ordersData);
});

// Rota para obter detalhes de um order específico
router.get("/:id", (req, res) => {
  const orderId = Number(req.params.id);
  const order = ordersData.find((order) => order.id === orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: "Pedido não encontrado" });
  }
});

module.exports = router;
