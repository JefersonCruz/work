import React from "react";
import { Box, Typography } from "@mui/material";


const EtiquetaAlarmeIncendio = ({ setor, dataInstalacao, tecnico }) => {
  return (
    <Box sx={{ padding: 2, border: "1px solid #f00", borderRadius: "8px", marginBottom: 2, backgroundColor: "#ffe5e5" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Central de Alarme de Incêndio
      </Typography>
      <Typography variant="body1">Setor: {setor}</Typography>
      <Typography variant="body1">Data de Instalação: {dataInstalacao}</Typography>
      <Typography variant="body1">Técnico Responsável: {tecnico}</Typography>
    </Box>
  );
};

export default EtiquetaAlarmeIncendio;
