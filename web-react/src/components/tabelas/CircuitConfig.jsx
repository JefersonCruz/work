import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CircuitConfig = () => {
  const [circuitos, setCircuitos] = useState([]);
  const [novoCircuito, setNovoCircuito] = useState({
    nome: "",
    tensao: "",
    corrente: "",
    descricao: "",
  });
  const [editandoIndex, setEditandoIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCircuito({ ...novoCircuito, [name]: value });
  };

  const handleAdicionarCircuito = () => {
    if (!novoCircuito.nome || !novoCircuito.tensao || !novoCircuito.corrente) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (editandoIndex !== null) {
      const circuitosAtualizados = [...circuitos];
      circuitosAtualizados[editandoIndex] = novoCircuito;
      setCircuitos(circuitosAtualizados);
      setEditandoIndex(null);
    } else {
      setCircuitos([...circuitos, novoCircuito]);
    }

    setNovoCircuito({ nome: "", tensao: "", corrente: "", descricao: "" });
  };

  const handleEditarCircuito = (index) => {
    setNovoCircuito(circuitos[index]);
    setEditandoIndex(index);
  };

  const handleRemoverCircuito = (index) => {
    const circuitosAtualizados = circuitos.filter((_, i) => i !== index);
    setCircuitos(circuitosAtualizados);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Configuração de Circuitos
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {editandoIndex !== null ? "Editar Circuito" : "Novo Circuito"}
        </Typography>
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <TextField
            label="Nome do Circuito"
            name="nome"
            value={novoCircuito.nome}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Tensão (V)"
            name="tensao"
            value={novoCircuito.tensao}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Corrente (A)"
            name="corrente"
            value={novoCircuito.corrente}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Descrição"
            name="descricao"
            value={novoCircuito.descricao}
            onChange={handleInputChange}
            multiline
            rows={2}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdicionarCircuito}
          sx={{ marginTop: 2 }}
        >
          {editandoIndex !== null ? "Atualizar Circuito" : "Adicionar Circuito"}
        </Button>
      </Paper>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Lista de Circuitos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Tensão</TableCell>
              <TableCell>Corrente</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {circuitos.map((circuito, index) => (
              <TableRow key={index}>
                <TableCell>{circuito.nome}</TableCell>
                <TableCell>{circuito.tensao}</TableCell>
                <TableCell>{circuito.corrente}</TableCell>
                <TableCell>{circuito.descricao}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleEditarCircuito(index)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemoverCircuito(index)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {circuitos.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Nenhum circuito configurado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CircuitConfig;
