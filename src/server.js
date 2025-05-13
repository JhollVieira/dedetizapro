require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota para /api/clientes
app.get('/api/clientes', (req, res) => {
  res.json({ message: 'Aqui estão os clientes' });  // Você pode substituir isso pelos dados reais
});

// Rota inicial
app.get('/', (req, res) => {
  res.send('Sistema SaaS Dedetizadora - API Inicial');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post('/api/clientes', (req, res) => {
  const { nome, idade } = req.body;  // Supondo que você enviará o nome e idade do cliente

  // Aqui você pode adicionar o cliente ao banco de dados (ex: MongoDB, MySQL, etc.)
  res.status(201).json({
    message: 'Cliente adicionado com sucesso',
    cliente: { nome, idade }
  });
});
