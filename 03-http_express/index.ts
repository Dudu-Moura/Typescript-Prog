// src/index.ts
import express from '../04-biblioteca-api/node_modules/@types/express';

const app = express();
const PORT = 3000;

// Middleware — permite receber JSON no body das requisições
app.use(express.json());

// Rota mais simples possível
app.get('/ping', (req, res) => {
    res.json({ mensagem: 'pong' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
