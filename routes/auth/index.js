// routes/auth.js
const express = require("express");
const router = express.Router();

// Rota de login
router.post("/login", (req, res) => {
  // Simulação básica de autenticação
  const { username, password } = req.body;

  // Verifique as credenciais (isso deve ser substituído por uma lógica real de autenticação)
  if (username === "usuario" && password === "senha") {
    // Autenticação bem-sucedida
    res.json({ message: "Autenticação bem-sucedida", token: "token_do_usuario" });
  } else {
    // Credenciais inválidas
    res.status(401).json({ error: "Credenciais inválidas" });
  }
});

module.exports = router;
