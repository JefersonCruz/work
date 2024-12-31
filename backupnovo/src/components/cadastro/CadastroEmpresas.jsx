import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CadastroEmpresas = () => {
  const [empresa, setEmpresa] = useState({
    nome: "",
    logotipo: "",
    telefone: "",
    email: "",
    endereco: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmpresa({ ...empresa, logotipo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Empresa cadastrada:", empresa);
    // Lógica para salvar os dados no backend ou localStorage
    alert("Empresa cadastrada com sucesso!");
    navigate("/admin/dashboard");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Cadastro de Empresas
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome da Empresa"
                name="nome"
                value={empresa.nome}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Telefone"
                name="telefone"
                value={empresa.telefone}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={empresa.email}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Endereço"
                name="endereco"
                value={empresa.endereco}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                Logotipo da Empresa
              </Typography>
              <Button variant="contained" component="label">
                Upload Logotipo
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {empresa.logotipo && (
                <Box
                  component="img"
                  src={empresa.logotipo}
                  alt="Logotipo"
                  sx={{ marginTop: 2, width: 100, height: 100 }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar Empresa
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    

<Box>
  <Typography variant="h4">Cadastro de Empresas</Typography>
</Box>

    </Box>
  );
};

export default CadastroEmpresas;
