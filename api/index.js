// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// app.use(express.json());

// let confirmations = []; // Armazena os dados de confirmação

// // Rota para obter todas as confirmações
// app.get('/confirmations', (req, res) => {
//     res.json(confirmations);
// });

// // Rota para adicionar uma nova confirmação
// app.post('/confirmations', (req, res) => {
//     const { guest, companions } = req.body;

//     if (guest && Array.isArray(companions)) {
//         confirmations.push({ guest, companions });
//         res.status(201).json({ message: 'Confirmação registrada com sucesso!' });
//     } else {
//         res.status(400).json({ error: 'Dados inválidos.' });
//     }
// });

// // Define a porta do servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

module.exports = (req, res) => {
    res.status(200).json({ message: "API funcionando!" });
  };