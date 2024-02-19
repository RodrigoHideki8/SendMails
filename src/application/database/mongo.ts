import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_CONNECTION;

const connectToDatabase = async () => {
  try {
    if (MONGO_URI === undefined) {
      return null;
    }
    await mongoose.connect(MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log("Conectado ao banco de dados MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

export default connectToDatabase;
