import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const EtiquetasPredios = () => {
  const [modeloEtiqueta, setModeloEtiqueta] = useState({
    voltagem: "",
    amperagem: "",
    dataInstalacao: "",
  });
  const [apartamentos, setApartamentos] = useState("");
  const [bloco, setBloco] = useState("");
  const [etiquetas, setEtiquetas] = useState([]);
  const etiquetaRef = useRef();

  const handleGenerateEtiquetas = () => {
    if (!apartamentos || !bloco || !modeloEtiqueta.voltagem || !modeloEtiqueta.amperagem || !modeloEtiqueta.dataInstalacao) {
      alert("Preencha todos os campos para gerar as etiquetas!");
      return;
    }

    const generatedEtiquetas = [];
    for (let i = 1; i <= parseInt(apartamentos); i++) {
      generatedEtiquetas.push({
        numeroApartamento: i,
        bloco,
        ...modeloEtiqueta,
      });
    }

    setEtiquetas(generatedEtiquetas);
  };

  const handleDownloadPDF = () => {
    if (!etiquetas.length) {
      alert("Nenhuma etiqueta gerada para download!");
      return;
    }

    html2canvas(etiquetaRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Etiquetas_Blocos_${bloco}.pdf`);
    });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Gerador de Etiquetas para Prédios
      </Typography>

      {/* Formulário para o modelo de etiqueta */}
      <Typography variant="h6" gutterBottom>
        Preencha o Modelo da Etiqueta
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Voltagem"
          value={modeloEtiqueta.voltagem}
          onChange={(e) =>
            setModeloEtiqueta({ ...modeloEtiqueta, voltagem: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Amperagem"
          value={modeloEtiqueta.amperagem}
          onChange={(e) =>
            setModeloEtiqueta({ ...modeloEtiqueta, amperagem: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Data de Instalação"
          type="date"
          value={modeloEtiqueta.dataInstalacao}
          onChange={(e) =>
            setModeloEtiqueta({
              ...modeloEtiqueta,
              dataInstalacao: e.target.value,
            })
          }
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      {/* Campos para quantidade de apartamentos e bloco */}
      <Typography variant="h6" gutterBottom>
        Detalhes dos Apartamentos
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Quantidade de Apartamentos"
          type="number"
          value={apartamentos}
          onChange={(e) => setApartamentos(e.target.value)}
          fullWidth
        />
        <TextField
          label="Bloco"
          value={bloco}
          onChange={(e) => setBloco(e.target.value)}
          fullWidth
        />
      </Box>

      {/* Botões */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleGenerateEtiquetas}>
          Gerar Etiquetas
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleDownloadPDF}>
          Baixar PDF
        </Button>
      </Box>

      {/* Exibição das etiquetas */}
      {etiquetas.length > 0 && (
        <div ref={etiquetaRef}>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              Etiquetas Geradas para o Bloco {bloco}
            </Typography>
            <Grid container spacing={2}>
              {etiquetas.map((etiqueta, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: 2,
                      textAlign: "left",
                    }}
                  >
                    <Typography><strong>Apartamento:</strong> {etiqueta.numeroApartamento}</Typography>
                    <Typography><strong>Bloco:</strong> {etiqueta.bloco}</Typography>
                    <Typography><strong>Voltagem:</strong> {etiqueta.voltagem}</Typography>
                    <Typography><strong>Amperagem:</strong> {etiqueta.amperagem}</Typography>
                    <Typography><strong>Data de Instalação:</strong> {etiqueta.dataInstalacao}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </div>
      )}
    </Box>
  );
};

export default EtiquetasPredios;
