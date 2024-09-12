const express = require('express');
// const connectDB = require('./config/db');

const cliente_routes = require('./routes/cliente_route.js');
const pet_routes = require('./routes/pet_route.js');

const app = express();

//retirei a conexão da
// Conectar ao banco de dados
// connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/clientes', cliente_routes);
app.use('/pets', pet_routes);

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
