import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const CadastroClientes = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    bloco: "",
    apartamento: "",
  });

  const [clientes, setClientes] = useState([]); // Lista de clientes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !cliente.nome ||
      !cliente.telefone ||
      !cliente.email ||
      !cliente.endereco ||
      !cliente.bloco ||
      !cliente.apartamento
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setClientes([...clientes, cliente]);
    setCliente({
      nome: "",
      telefone: "",
      email: "",
      endereco: "",
      bloco: "",
      apartamento: "",
    });
    alert("Cliente cadastrado com sucesso!");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Cadastro de Clientes
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome do Cliente"
                name="nome"
                value={cliente.nome}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Telefone"
                name="telefone"
                value={cliente.telefone}
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
                value={cliente.email}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Endereço"
                name="endereco"
                value={cliente.endereco}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Bloco"
                name="bloco"
                value={cliente.bloco}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Número do Apartamento"
                name="apartamento"
                value={cliente.apartamento}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar Cliente
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Listagem de Clientes */}
      {clientes.length > 0 && (
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Clientes Cadastrados
          </Typography>
          <List>
            {clientes.map((c, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${c.nome} - Bloco: ${c.bloco}, Apartamento: ${c.apartamento}`}
                  secondary={`${c.telefone} | ${c.email}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default CadastroClientes;
