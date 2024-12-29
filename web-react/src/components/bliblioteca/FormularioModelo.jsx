import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const FormularioModelo = ({ modelo, onSave, onCancel }) => {
  const [nome, setNome] = useState(modelo?.nome || "");
  const [descricao, setDescricao] = useState(modelo?.descricao || "");
  const [voltagem, setVoltagem] = useState(modelo?.voltagem || "");
  const [amperagem, setAmperagem] = useState(modelo?.amperagem || "");

  const handleSave = () => {
    if (!nome || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }
    onSave({ id: modelo?.id || null, nome, descricao, voltagem, amperagem });
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <TextField
        label="Nome do Modelo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Voltagem"
        value={voltagem}
        onChange={(e) => setVoltagem(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Amperagem"
        value={amperagem}
        onChange={(e) => setAmperagem(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Salvar
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioModelo;
