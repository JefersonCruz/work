import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";

const Configuracoes = () => {
  const [logotipo, setLogotipo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [contato, setContato] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLogotipo(file);
    setPreview(URL.createObjectURL(file)); // Gerar pré-visualização
  };

  const handleSave = async () => {
    if (!logotipo || !nomeEmpresa || !contato) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      // Enviar a imagem para o backend
      const formData = new FormData();
      formData.append("logotipo", logotipo);
      formData.append("nomeEmpresa", nomeEmpresa);
      formData.append("contato", contato);

      const response = await axios.post("/api/configuracoes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { qrCodeUrl } = response.data;
      setQrValue(qrCodeUrl);
      alert("Configurações salvas com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar configurações:", error);
      alert("Erro ao salvar configurações. Tente novamente.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Configurações da Empresa
      </Typography>

      <TextField
        fullWidth
        label="Nome da Empresa"
        value={nomeEmpresa}
        onChange={(e) => setNomeEmpresa(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Box sx={{ mb: 2 }}>
        <Button variant="contained" component="label">
          Upload do Logotipo
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {preview && (
          <Box mt={2}>
            <img
              src={preview}
              alt="Pré-visualização do logotipo"
              style={{ width: 200, height: "auto" }}
            />
          </Box>
        )}
      </Box>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Salvar Configurações
      </Button>

      {qrValue && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">QR Code Gerado:</Typography>
          <QRCodeCanvas value={qrValue} size={200} />
        </Box>
      )}
    </Box>
  );
};

export default Configuracoes;
