import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Configuração do ambiente
dotenv.config();

// Conexão com o banco
connectDB();

// Inicialização do servidor
const app = express();
app.use(express.json());

// Rotas
app.use("/api/users", userRoutes);

// Rota padrão
app.get("/", (req, res) => {
  res.send("API Rodando!");
});

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

console.log("Servidor iniciando...");
console.log("Conectando ao MongoDB...");
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor", error: err.message });
});
