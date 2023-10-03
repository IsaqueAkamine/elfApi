// app.js
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes");

const port = 3000;

// app.use("/api", routes);

// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });


// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rotas principais
app.use('/api', routes);

// Rotas de autenticação
app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});