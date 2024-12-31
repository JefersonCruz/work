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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const GerenciarClientes = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    tipoCliente: "",
    bloco: "",
    apartamento: "",
  });

  const [clientes, setClientes] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState("");

  // Manipulação de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  // Submeter cliente
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !cliente.nome ||
      !cliente.telefone ||
      !cliente.email ||
      !cliente.endereco ||
      !cliente.tipoCliente ||
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
      tipoCliente: "",
      bloco: "",
      apartamento: "",
    });
    alert("Cliente cadastrado com sucesso!");
  };

  // Filtrar clientes por tipo
  const handleFiltrarClientes = () => {
    return filtroTipo
      ? clientes.filter((cliente) => cliente.tipoCliente === filtroTipo)
      : clientes;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Gerenciar Clientes
      </Typography>

      {/* Cadastro de Cliente */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Cadastro de Cliente
        </Typography>
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
              <FormControl fullWidth required>
                <InputLabel>Tipo de Cliente</InputLabel>
                <Select
                  name="tipoCliente"
                  value={cliente.tipoCliente}
                  onChange={handleInputChange}
                >
                  <MenuItem value="Etiqueta de Ar Condicionado">
                    Etiqueta de Ar Condicionado
                  </MenuItem>
                  <MenuItem value="Etiqueta de Quadro de Energia">
                    Etiqueta de Quadro de Energia
                  </MenuItem>
                  <MenuItem value="Etiqueta de Alarme de Incêndio">
                    Etiqueta de Alarme de Incêndio
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar Cliente
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Filtro de Clientes */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Filtrar Clientes
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Tipo de Cliente</InputLabel>
          <Select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Etiqueta de Ar Condicionado">
              Etiqueta de Ar Condicionado
            </MenuItem>
            <MenuItem value="Etiqueta de Quadro de Energia">
              Etiqueta de Quadro de Energia
            </MenuItem>
            <MenuItem value="Etiqueta de Alarme de Incêndio">
              Etiqueta de Alarme de Incêndio
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Listagem de Clientes */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Clientes Cadastrados
        </Typography>
        <List>
          {handleFiltrarClientes().map((c, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${c.nome} - ${c.tipoCliente}`}
                secondary={`Bloco: ${c.bloco}, Apartamento: ${c.apartamento} | ${c.telefone} | ${c.email}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default GerenciarClientes;
