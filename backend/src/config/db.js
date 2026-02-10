const mongoose = require('mongoose');

let isConnected; // global variable para serverless

const connectDB = async () => {
  if (isConnected) {
    console.log('Usando conexión existente a MongoDB');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log('MongoDB conectado');
  } catch (error) {
    console.log('Error al conectar MongoDB:', error);
    throw error; // esto hace que Vercel muestre 500 si falla
  }
};

module.exports = connectDB;
