import React, { useState } from "react";
import { Box, Typography, Button, TextField, MenuItem, Paper } from "@mui/material";

const LabelCustomizationTools = ({ onLogoChange, onBackgroundChange, onFontChange }) => {
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("Arial");

  const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Tahoma"];

  const handleFileChange = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => callback(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ferramentas de Personalização
      </Typography>
      {/* Trocar Logotipo */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1">Alterar Logotipo:</Typography>
        <Button variant="contained" component="label">
          Carregar Logotipo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleFileChange(e, (result) => {
              setLogo(result);
              onLogoChange(result);
            })}
          />
        </Button>
        {logo && <img src={logo} alt="Logotipo" style={{ maxWidth: "100px", marginTop: 10 }} />}
      </Box>
      {/* Trocar Plano de Fundo */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="body1">Alterar Plano de Fundo:</Typography>
        <Button variant="contained" component="label">
          Carregar Plano de Fundo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleFileChange(e, (result) => {
              setBackground(result);
              onBackgroundChange(result);
            })}
          />
        </Button>
        {background && <img src={background} alt="Plano de Fundo" style={{ maxWidth: "100px", marginTop: 10 }} />}
      </Box>
      {/* Alterar Fonte */}
      <Box>
        <Typography variant="body1">Alterar Fonte da Tabela:</Typography>
        <TextField
          select
          value={font}
          onChange={(e) => {
            setFont(e.target.value);
            onFontChange(e.target.value);
          }}
          variant="outlined"
          size="small"
          fullWidth
        >
          {fonts.map((fontOption) => (
            <MenuItem key={fontOption} value={fontOption}>
              {fontOption}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Paper>
  );
};

export default LabelCustomizationTools;
