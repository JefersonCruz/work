import React from "react";
import { Box, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ qrCodeValue, qrCodeSize }) => (
  <Box sx={{ textAlign: "center", marginTop: 2 }}>
    <QRCodeCanvas value={qrCodeValue} size={qrCodeSize} />
    <Typography variant="body2" sx={{ marginTop: 1 }}>
      Escaneie o QR Code para acessar mais informações.
    </Typography>
  </Box>
);

export default QRCodeGenerator;
