import React, { useState } from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import FormularioModelo from "./FormularioModelo";

const BlibliotecaModelos = () => {
  const [modelos, setModelos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentModelo, setCurrentModelo] = useState(null);

  const handleAddModelo = () => {
    setCurrentModelo(null);
    setIsEditing(true);
  };

  const handleEditModelo = (modelo) => {
    setCurrentModelo(modelo);
    setIsEditing(true);
  };

  const handleDeleteModelo = (id) => {
    setModelos(modelos.filter((modelo) => modelo.id !== id));
  };

  const handleSaveModelo = (modelo) => {
    if (modelo.id) {
      setModelos(modelos.map((m) => (m.id === modelo.id ? modelo : m)));
    } else {
      setModelos([...modelos, { ...modelo, id: Date.now() }]);
    }
    setIsEditing(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Biblioteca de Modelos
      </Typography>

      <Button variant="contained" color="primary" onClick={handleAddModelo}>
        Criar Novo Modelo
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome do Modelo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modelos.length > 0 ? (
              modelos.map((modelo) => (
                <TableRow key={modelo.id}>
                  <TableCell>{modelo.nome}</TableCell>
                  <TableCell>{modelo.descricao}</TableCell>
                  <TableCell>
                    <Button size="small" onClick={() => handleEditModelo(modelo)}>
                      Editar
                    </Button>
                    <Button size="small" color="error" onClick={() => handleDeleteModelo(modelo.id)}>
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Nenhum modelo salvo.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {isEditing && (
        <FormularioModelo
          modelo={currentModelo}
          onSave={handleSaveModelo}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </Box>
  );
};

export default BlibliotecaModelos;
