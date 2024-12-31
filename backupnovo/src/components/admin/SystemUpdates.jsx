import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SystemUpdates = () => {
  const handleCheckUpdates = () => {
    alert("Procurando por atualizações...");
  };

  const handleApplyUpdates = () => {
    alert("Aplicando atualizações...");
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Atualização do Sistema
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckUpdates}
        sx={{ marginRight: 2 }}
      >
        Verificar Atualizações
      </Button>
      <Button variant="contained" color="success" onClick={handleApplyUpdates}>
        Aplicar Atualizações
      </Button>
    </Box>
  );
};

export default SystemUpdates;
