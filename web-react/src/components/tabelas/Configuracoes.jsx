// src/components/admin/tabelas/Configuracoes.jsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

// Exemplo de dados de configuração
const mockData = [
  { nome: "Quadro 1", capacidade: "100A", tipo: "Monofásico" },
  { nome: "Quadro 2", capacidade: "200A", tipo: "Bifásico" },
];

const Configuracoes = () => {
  const [quadros, setQuadros] = useState(mockData);
  const [novoQuadro, setNovoQuadro] = useState({ nome: "", capacidade: "", tipo: "" });

  // Função para adicionar um novo quadro
  const adicionarQuadro = () => {
    setQuadros([...quadros, novoQuadro]);
    setNovoQuadro({ nome: "", capacidade: "", tipo: "" });
  };

  // Função para atualizar o valor de um quadro
  const atualizarQuadro = (index, key, value) => {
    const novosQuadros = [...quadros];
    novosQuadros[index][key] = value;
    setQuadros(novosQuadros);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Configurações dos Quadros Elétricos
      </Typography>
      
      {/* Exibição e edição de quadros */}
      <Grid container spacing={2}>
        {quadros.map((quadro, index) => (
          <Grid item xs={12} md={6} key={index}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={quadro.nome}
              onChange={(e) => atualizarQuadro(index, "nome", e.target.value)}
            />
            <TextField
              label="Capacidade"
              variant="outlined"
              fullWidth
              value={quadro.capacidade}
              onChange={(e) => atualizarQuadro(index, "capacidade", e.target.value)}
            />
            <TextField
              label="Tipo"
              variant="outlined"
              fullWidth
              value={quadro.tipo}
              onChange={(e) => atualizarQuadro(index, "tipo", e.target.value)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Formulário para adicionar novo quadro */}
      <Grid container spacing={2} marginTop={3}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={novoQuadro.nome}
            onChange={(e) => setNovoQuadro({ ...novoQuadro, nome: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Capacidade"
            variant="outlined"
            fullWidth
            value={novoQuadro.capacidade}
            onChange={(e) => setNovoQuadro({ ...novoQuadro, capacidade: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Tipo"
            variant="outlined"
            fullWidth
            value={novoQuadro.tipo}
            onChange={(e) => setNovoQuadro({ ...novoQuadro, tipo: e.target.value })}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={adicionarQuadro}
        sx={{ marginTop: 3 }}
      >
        Adicionar Quadro
      </Button>
    </div>
  );
};

export default Configuracoes;
