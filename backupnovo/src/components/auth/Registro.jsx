import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

const Registro = () => {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/register", form);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Erro ao registrar usuário.");
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Usuário
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="nome"
          fullWidth
          margin="normal"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Senha"
          name="senha"
          type="password"
          fullWidth
          margin="normal"
          value={form.senha}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Registrar
        </Button>
      </form>
      {message && <Typography color="error" sx={{ marginTop: 2 }}>{message}</Typography>}
    </Paper>
  );
};

export default Registro;
