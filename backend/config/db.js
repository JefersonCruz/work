const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB com sucesso!");
        return client.db("meu_banco"); // Nome do banco
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
