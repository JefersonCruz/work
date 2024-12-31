import React, { useState, useRef } from "react";
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
  Avatar,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ModelosTabela = () => {
  const printRef = useRef(null);
  const [dadosEmpresa, setDadosEmpresa] = useState({
    nome: "Empresa Exemplo",
    contato: "(00) 00000-0000",
    email: "contato@exemplo.com",
    qrCodeLink: "https://empresa.com",
    suporteTelefone: "(11) 12345-6789",
    suporteEmail: "suporte@exemplo.com",
    logotipo: "https://via.placeholder.com/80",
    endereco: "Bloco A, Apartamento 101, Primeiro Andar",
  });

  const [circuitos, setCircuitos] = useState(
    Array.from({ length: 24 }, (_, index) => ({
      nome: `Circuito ${index + 1}`,
      tensao: "127V",
      corrente: "10A",
      descricao: `Descrição do circuito ${index + 1}`,
    }))
  );

  const [layoutConfig, setLayoutConfig] = useState({
    corCabecalho: "#0288d1",
    tamanhoQRCode: 70,
    bordaTabela: true,
  });

  const handlePrint = () => {
    const element = printRef.current;
    if (element) {
      html2canvas(element, {
        scale: 3,
        useCORS: true,
        logging: true,
      }).then((canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("tabela-circuitos.pdf");
      });
    }
  };

  const handleChangeConfig = (key, value) => {
    setLayoutConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5" }}>
      {/* Configuração Personalizada */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Configuração Personalizada
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <FormControl fullWidth>
            <InputLabel>Cor do Cabeçalho</InputLabel>
            <Select
              value={layoutConfig.corCabecalho}
              onChange={(e) => handleChangeConfig("corCabecalho", e.target.value)}
            >
              <MenuItem value="#0288d1">Azul</MenuItem>
              <MenuItem value="#4caf50">Verde</MenuItem>
              <MenuItem value="#f44336">Vermelho</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Tamanho do QR Code"
            type="number"
            value={layoutConfig.tamanhoQRCode}
            onChange={(e) => handleChangeConfig("tamanhoQRCode", e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Borda da Tabela</InputLabel>
            <Select
              value={layoutConfig.bordaTabela}
              onChange={(e) => handleChangeConfig("bordaTabela", e.target.value === "true")}
            >
              <MenuItem value={"true"}>Sim</MenuItem>
              <MenuItem value={"false"}>Não</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      {/* Tabela para impressão */}
      <TableContainer
        component={Paper}
        ref={printRef}
        sx={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "800px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Table sx={{ tableLayout: "auto", border: layoutConfig.bordaTabela ? "1px solid #ccc" : "none" }}>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                sx={{ background: "#e3f2fd", padding: 2, borderRadius: "15px 15px 0 0" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: layoutConfig.corCabecalho,
                    borderRadius: "15px",
                    padding: 2,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Avatar
                    src={dadosEmpresa.logotipo || "https://via.placeholder.com/80"}
                    alt="Logotipo da Empresa"
                    sx={{ width: 80, height: 80, marginBottom: 1, border: "2px solid white" }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                    {dadosEmpresa.nome || "Nome da Empresa"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    <strong>Contato:</strong> {dadosEmpresa.contato} | <strong>Email:</strong> {dadosEmpresa.email}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <TableContainer component={Paper} sx={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Table size="small" sx={{ tableLayout: "fixed", borderCollapse: "collapse" }}>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: layoutConfig.corCabecalho }}>
                        <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                          Nome
                        </TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                          Tensão
                        </TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                          Corrente
                        </TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                          Descrição
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {circuitos.map((circuito, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ textAlign: "center", padding: "5px" }}>{circuito.nome}</TableCell>
                          <TableCell sx={{ textAlign: "center", padding: "5px" }}>{circuito.tensao}</TableCell>
                          <TableCell sx={{ textAlign: "center", padding: "5px" }}>{circuito.corrente}</TableCell>
                          <TableCell sx={{ textAlign: "center", padding: "5px" }}>{circuito.descricao}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableCell>
            </TableRow>
            <TableRow>
  <TableCell colSpan={2} align="center">
    <Typography variant="body2" sx={{ marginBottom: 1, fontWeight: "bold" }}>
      <strong>Informações do Quadro:</strong> {dadosEmpresa.endereco || "Endereço não informado"}
    </Typography>
    <QRCodeCanvas value={dadosEmpresa.qrCodeLink || "https://empresa.com"} size={layoutConfig.tamanhoQRCode} />
    <Typography variant="body2">
      Escaneie o QR Code para acessar a planta elétrica e documentação técnica.
    </Typography>
    <Typography variant="body2">
      <strong>Suporte:</strong> {dadosEmpresa.suporteTelefone} | {dadosEmpresa.suporteEmail}
    </Typography>
  </TableCell>
</TableRow>

{/* Adicione um espaçamento extra para evitar o corte */}
<TableRow>
  <TableCell colSpan={2} style={{ height: '50px' }}></TableCell>
</TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Imprimir como PDF
        </Button>
      </Box>
    </Box>
  );
};

export default ModelosTabela;
