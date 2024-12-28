import React, { useRef } from "react";
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
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { dadosEmpresa, circuitos } from "./circuitos";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ModelosTabela = () => {
  const tableRef = useRef(null);

  const handlePrint = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 190;
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("tabela-circuitos.pdf");
      });
    }
  };

  const handleShareWhatsApp = () => {
    const message = `
📋 *Informações do Quadro de Distribuição de Energia* 📋

🏢 *Empresa:* ${dadosEmpresa.nome}
📞 *Contato:* ${dadosEmpresa.contato}
📧 *Email:* ${dadosEmpresa.email}
🔌 *Identificação:* ${dadosEmpresa.identificacaoQuadro}
📍 *Localização:* ${dadosEmpresa.localizacaoQuadro}
⚡ *Voltagem:* ${dadosEmpresa.voltagem}
📅 *Data de Instalação:* ${dadosEmpresa.dataInstalacao}

⚙️ *Circuitos:*
${circuitos
  .map(
    (circuito, index) =>
      `  ${index + 1}. ${circuito.nome} - ${circuito.tensao}, ${circuito.corrente} (${circuito.descricao})`
  )
  .join("\n")}

📎 Acesse a planta elétrica e mais detalhes: ${dadosEmpresa.qrCodeLink}
    `;

    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
      {/* Tabela a ser impressa */}
      <div ref={tableRef}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
          <Box sx={{ flex: "0 0 auto", marginRight: 2 }}>
            <Avatar
              src={dadosEmpresa.logotipo || "https://via.placeholder.com/80"}
              alt="Logotipo da Empresa"
              sx={{ width: 80, height: 80 }}
            />
          </Box>
          <Box sx={{ flex: "1 1 auto" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {dadosEmpresa.nome || "Nome da Empresa"}
            </Typography>
            <Typography variant="body1">
              {dadosEmpresa.contato || "Contato não informado"}
            </Typography>
            <Typography variant="body1">
              {dadosEmpresa.email || "Email não informado"}
            </Typography>
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell sx={{ color: "white" }}>Nome do Circuito</TableCell>
                <TableCell sx={{ color: "white" }}>Tensão</TableCell>
                <TableCell sx={{ color: "white" }}>Corrente</TableCell>
                <TableCell sx={{ color: "white" }}>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {circuitos.length > 0 ? (
                circuitos.map((circuito, index) => (
                  <TableRow key={index}>
                    <TableCell>{circuito.nome || "Não informado"}</TableCell>
                    <TableCell>{circuito.tensao || "Não informado"}</TableCell>
                    <TableCell>{circuito.corrente || "Não informado"}</TableCell>
                    <TableCell>{circuito.descricao || "Não informado"}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Nenhum circuito cadastrado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Botões de ação */}
      <Box sx={{ marginTop: 3, display: "flex", gap: 2, justifyContent: "center" }}>
        <button
          onClick={handlePrint}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Imprimir como PDF
        </button>
        <button
          onClick={handleShareWhatsApp}
          style={{
            padding: "10px 20px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Compartilhar via WhatsApp
        </button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          marginTop: 3,
          padding: 2,
          backgroundColor: "#e0e0e0",
          textAlign: "center",
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Para mais informações, entre em contato com nosso suporte técnico.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Telefone: {dadosEmpresa.suporteTelefone || "(00) 00000-0000"} | Email:{" "}
          {dadosEmpresa.suporteEmail || "suporte@empresa.com"}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Usuário:</strong> morador123 | <strong>Senha:</strong> acesso123
        </Typography>
        <QRCodeCanvas
          value={dadosEmpresa.qrCodeLink || "https://empresa.com"}
          size={100}
        />
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Escaneie o QR Code para acessar a planta elétrica e documentação técnica.
        </Typography>
      </Box>
    </Box>
  );
};

export default ModelosTabela;
