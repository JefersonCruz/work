import React from "react";
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
} from "@mui/material";

const AuditLogs = () => {
  const logs = [
    { id: 1, user: "Admin", action: "Login realizado", date: "2023-12-28" },
    { id: 2, user: "User", action: "Etiqueta gerada", date: "2023-12-27" },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Logs de Auditoria
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell>Ação</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AuditLogs;
