require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

// Conectar DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

// Middleware de errores
app.use(errorHandler);

// Servidor
const PORT = process.env.PORT || 3000;
module.exports = app
