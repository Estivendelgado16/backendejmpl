require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Conectar DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando ✅');
});

// Middleware de errores
app.use(errorHandler);

// ❌ No usar listen() en Vercel
module.exports = app;
