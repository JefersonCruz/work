import React from "react";
import { Box, Typography } from "@mui/material";

const EtiquetaArCondicionado = ({ identificacao, dataLimpeza, tecnico }) => {
  return (
    <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: "8px", marginBottom: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Ar Condicionado
      </Typography>
      <Typography variant="body1">Identificação: {identificacao}</Typography>
      <Typography variant="body1">Última Limpeza: {dataLimpeza}</Typography>
      <Typography variant="body1">Técnico Responsável: {tecnico}</Typography>
    </Box>
  );
};

export default EtiquetaArCondicionado;
