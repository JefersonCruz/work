import React from "react";
import { Box, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

// Dados de exemplo para depuração
const defaultDadosEmpresa = {
  identificacaoQuadro: "Quadro Principal",
  localizacaoQuadro: "1º Andar",
  qrCodeLink: "https://empresa.com/documentacao",
};

const defaultCircuito = {
  tensao: "220V",
  corrente: "10A",
  descricao: "Luzes da Sala",
};

const EtiquetaQuadro = ({ dadosEmpresa = defaultDadosEmpresa, circuito = defaultCircuito }) => {
  if (!dadosEmpresa || !circuito) {
    return <Typography variant="h6">Erro ao carregar os dados.</Typography>;
  }

  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Quadro de Distribuição: {dadosEmpresa.identificacaoQuadro}
      </Typography>
      <Typography variant="body1">
        Localização: {dadosEmpresa.localizacaoQuadro}
      </Typography>
      <Typography variant="body1">Tensão: {circuito.tensao}</Typography>
      <Typography variant="body1">Corrente: {circuito.corrente}</Typography>
      <Typography variant="body1">Descrição: {circuito.descricao}</Typography>
      <Box sx={{ marginTop: 2, textAlign: "center" }}>
        <QRCodeCanvas value={dadosEmpresa.qrCodeLink} size={100} />
        <Typography variant="caption" sx={{ display: "block", marginTop: 1 }}>
          Escaneie para acessar a documentação
        </Typography>
      </Box>
    </Box>
  );
};

export default EtiquetaQuadro;
