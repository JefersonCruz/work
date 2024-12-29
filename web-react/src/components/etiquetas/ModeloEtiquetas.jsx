import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ModeloEtiquetas = () => {
  const [modelos, setModelos] = useState([]);
  const [novoModelo, setNovoModelo] = useState({
    nome: "",
    voltagem: "",
    amperagem: "",
    descricao: "",
  });
  const [editando, setEditando] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoModelo({ ...novoModelo, [name]: value });
  };

  const handleSalvarModelo = () => {
    if (!novoModelo.nome || !novoModelo.voltagem || !novoModelo.amperagem) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (editando !== null) {
      const modelosAtualizados = modelos.map((modelo, index) =>
        index === editando ? novoModelo : modelo
      );
      setModelos(modelosAtualizados);
      setEditando(null);
    } else {
      setModelos([...modelos, novoModelo]);
    }

    setNovoModelo({ nome: "", voltagem: "", amperagem: "", descricao: "" });
  };

  const handleEditarModelo = (index) => {
    setNovoModelo(modelos[index]);
    setEditando(index);
  };

  const handleExcluirModelo = (index) => {
    const modelosAtualizados = modelos.filter((_, i) => i !== index);
    setModelos(modelosAtualizados);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Biblioteca de Modelos de Etiquetas
      </Typography>

      {/* Formulário para criar ou editar modelo */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          {editando !== null ? "Editar Modelo" : "Novo Modelo"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome do Modelo"
              name="nome"
              value={novoModelo.nome}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Voltagem"
              name="voltagem"
              value={novoModelo.voltagem}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Amperagem"
              name="amperagem"
              value={novoModelo.amperagem}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              name="descricao"
              value={novoModelo.descricao}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSalvarModelo}
              fullWidth
            >
              {editando !== null ? "Atualizar Modelo" : "Salvar Modelo"}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Lista de modelos salvos */}
      <Typography variant="h6" gutterBottom>
        Modelos Salvos
      </Typography>
      {modelos.length > 0 ? (
        <List>
          {modelos.map((modelo, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={modelo.nome}
                secondary={`Voltagem: ${modelo.voltagem}, Amperagem: ${modelo.amperagem}, Descrição: ${modelo.descricao}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleEditarModelo(index)}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => handleExcluirModelo(index)}
                  color="secondary"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>Nenhum modelo salvo.</Typography>
      )}
    </Box>
  );
};

export default ModeloEtiquetas;
