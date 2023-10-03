// routes/customers.js
const express = require("express");
const customersData = require("./data");
const router = express.Router();

// Rota para obter uma lista de customers
router.get("/", (req, res) => {
  res.json(customersData);
});

// Rota para obter detalhes de um customer específico
router.get("/:id", (req, res) => {
  const customerId = Number(req.params.id);
  const customer = customersData.find((customer) => customer.id === customerId);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

module.exports = router;
