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
} from "@mui/material";

const etiquetasMock = [
  { id: 1, nomeCliente: "João Silva", bloco: "A", apartamento: "101", dataCriacao: "2023-12-28" },
  { id: 2, nomeCliente: "Maria Oliveira", bloco: "B", apartamento: "202", dataCriacao: "2023-12-27" },
  { id: 3, nomeCliente: "Carlos Santos", bloco: "A", apartamento: "102", dataCriacao: "2023-12-26" },
  { id: 4, nomeCliente: "Ana Souza", bloco: "C", apartamento: "301", dataCriacao: "2023-12-25" },
];

const GerenciamentoEtiquetas = () => {
  const [etiquetas, setEtiquetas] = useState(etiquetasMock);
  const [filters, setFilters] = useState({
    nomeCliente: "",
    bloco: "",
    dataCriacao: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredEtiquetas = etiquetas.filter((etiqueta) => {
    return (
      (filters.nomeCliente === "" ||
        etiqueta.nomeCliente.toLowerCase().includes(filters.nomeCliente.toLowerCase())) &&
      (filters.bloco === "" || etiqueta.bloco.toLowerCase().includes(filters.bloco.toLowerCase())) &&
      (filters.dataCriacao === "" || etiqueta.dataCriacao === filters.dataCriacao)
    );
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Gerenciamento de Etiquetas
      </Typography>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Nome do Cliente"
          name="nomeCliente"
          value={filters.nomeCliente}
          onChange={handleFilterChange}
          fullWidth
        />
        <TextField
          label="Bloco"
          name="bloco"
          value={filters.bloco}
          onChange={handleFilterChange}
          fullWidth
        />
        <TextField
          label="Data de Criação"
          name="dataCriacao"
          type="date"
          value={filters.dataCriacao}
          onChange={handleFilterChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nome do Cliente</strong></TableCell>
              <TableCell><strong>Bloco</strong></TableCell>
              <TableCell><strong>Apartamento</strong></TableCell>
              <TableCell><strong>Data de Criação</strong></TableCell>
              <TableCell><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEtiquetas.length > 0 ? (
              filteredEtiquetas.map((etiqueta) => (
                <TableRow key={etiqueta.id}>
                  <TableCell>{etiqueta.nomeCliente}</TableCell>
                  <TableCell>{etiqueta.bloco}</TableCell>
                  <TableCell>{etiqueta.apartamento}</TableCell>
                  <TableCell>{etiqueta.dataCriacao}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" size="small" sx={{ marginRight: 1 }}>
                      Editar
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Nenhuma etiqueta encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GerenciamentoEtiquetas;
