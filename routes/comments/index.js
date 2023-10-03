// routes/comments.js
const express = require("express");
const commentsData = require("./data");
const router = express.Router();

// Rota para obter uma lista de comments
router.get("/", (req, res) => {
  res.json(commentsData);
});

// Rota para obter detalhes de um comment específico
router.get("/:id", (req, res) => {
  const commentId = Number(req.params.id);
  const comment = commentsData.find((comment) => comment.id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: "Comentário não encontrado" });
  }
});

module.exports = router;
