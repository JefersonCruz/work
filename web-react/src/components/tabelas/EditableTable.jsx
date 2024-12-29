import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const EditableTable = () => {
  const [rows, setRows] = useState([
    { id: 1, nome: "Circuito 1", tensao: "127V", corrente: "10A", descricao: "Iluminação Sala" },
    { id: 2, nome: "Circuito 2", tensao: "220V", corrente: "15A", descricao: "Ar Condicionado" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editRowData, setEditRowData] = useState({});

  const handleEdit = (id) => {
    setEditingId(id);
    const row = rows.find((row) => row.id === id);
    setEditRowData({ ...row });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditRowData({});
  };

  const handleSaveEdit = () => {
    setRows(rows.map((row) => (row.id === editingId ? editRowData : row)));
    setEditingId(null);
    setEditRowData({});
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRowData({ ...editRowData, [name]: value });
  };

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      nome: "",
      tensao: "",
      corrente: "",
      descricao: "",
    };
    setRows([...rows, newRow]);
    setEditingId(newRow.id);
    setEditRowData(newRow);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Tabela Editável
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddRow} sx={{ marginBottom: 2 }}>
        Adicionar Linha
      </Button>
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
            {rows.map((row) =>
              editingId === row.id ? (
                <TableRow key={row.id}>
                  <TableCell>
                    <TextField
                      name="nome"
                      value={editRowData.nome}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="tensao"
                      value={editRowData.tensao}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="corrente"
                      value={editRowData.corrente}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="descricao"
                      value={editRowData.descricao}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={handleSaveEdit} color="primary">
                      <SaveIcon />
                    </IconButton>
                    <IconButton onClick={handleCancelEdit} color="secondary">
                      <CancelIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={row.id}>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.tensao}</TableCell>
                  <TableCell>{row.corrente}</TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleEdit(row.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EditableTable;
