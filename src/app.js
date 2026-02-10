require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// connect to db
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/users', userRoutes);

// Middleware bugs
app.use(errorHandler);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
