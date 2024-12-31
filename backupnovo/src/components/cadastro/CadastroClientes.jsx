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

  // Função para manipular mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  // Função para cadastrar cliente
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

  // Função para importar contatos da agenda (Web API)
  const handleImportFromContacts = async () => {
    if (!("contacts" in navigator && "ContactsManager" in window)) {
      alert("Seu navegador não suporta a API de Contatos.");
      return;
    }

    try {
      const props = ["name", "email", "tel"]; // Propriedades a serem buscadas
      const opts = { multiple: true }; // Permitir múltiplos contatos

      const contacts = await navigator.contacts.select(props, opts);
      if (contacts.length > 0) {
        const contact = contacts[0]; // Usar o primeiro contato selecionado
        setCliente((prev) => ({
          ...prev,
          nome: contact.name ? contact.name[0] : "",
          telefone: contact.tel ? contact.tel[0] : "",
          email: contact.email ? contact.email[0] : "",
        }));
      }
    } catch (error) {
      console.error("Erro ao acessar contatos:", error);
      alert("Ocorreu um erro ao acessar seus contatos.");
    }
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
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={handleImportFromContacts}
                sx={{ marginRight: 2 }}
              >
                Importar Contato
              </Button>
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
