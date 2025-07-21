// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Pour éviter les avertissements de dépréciation
      useUnifiedTopology: true // Pour utiliser le nouveau moteur de découverte et de surveillance du serveur
      // useCreateIndex: true, // Plus nécessaire avec Mongoose 6+
      // useFindAndModify: false // Plus nécessaire avec Mongoose 6+
    });
    console.log(`MongoDB Connecté: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur de connexion à MongoDB: ${error.message}`);
    process.exit(1); // Arrête le processus en cas d'erreur fatale
  }
};

module.exports = connectDB;