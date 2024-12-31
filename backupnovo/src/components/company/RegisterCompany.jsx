import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

const RegisterCompany = () => {
  const [form, setForm] = useState({ nome: "", endereco: "", telefone: "" });
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nome", form.nome);
      formData.append("endereco", form.endereco);
      formData.append("telefone", form.telefone);
      if (logo) {
        formData.append("logo", logo);
      }
      const response = await axios.post("/api/companies", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Erro ao cadastrar empresa.");
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Empresa
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome da Empresa"
          name="nome"
          fullWidth
          margin="normal"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <TextField
          label="Endereço"
          name="endereco"
          fullWidth
          margin="normal"
          value={form.endereco}
          onChange={handleChange}
          required
        />
        <TextField
          label="Telefone"
          name="telefone"
          fullWidth
          margin="normal"
          value={form.telefone}
          onChange={handleChange}
          required
        />
        <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2 }}>
          Upload Logotipo
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Registrar Empresa
        </Button>
      </form>
      {message && <Typography color="error" sx={{ marginTop: 2 }}>{message}</Typography>}
    </Paper>
  );
};

export default RegisterCompany;
