// routes/users.js
const express = require("express");
const usersData = require("./data");
const router = express.Router();

// Rota para obter uma lista de users
router.get("/", (req, res) => {
  res.json(usersData);
});

// Rota para obter detalhes de um user específico
router.get("/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = usersData.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Usuário não encontrado" });
  }
});

module.exports = router;
