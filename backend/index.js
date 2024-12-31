import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

// Conexão com o MongoDB
const mongoURI = "mongodb://localhost:27017/sua-base-de-dados";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
