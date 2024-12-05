// src/components/dashboard/Dashboard.jsx

import React from "react";
import { Container, Box, Typography, Card, CardContent } from "@mui/material";
import VendasMensais from "./VendasMensais";
import VendasPorClientes from "./VendasPorClientes";
import VendasPorCategoria from "./VendasPorCategoria";
import MaiorVendaCard from "./MaiorVendaCard";
import MediaVendaCard from "./MediaVendaCard";
import VendasPendentesCard from "./VendasPendentesCard";

const Dashboard = () => {
  const spacing = 2;
  const cardHeight = 120; // Definindo uma altura constante para todos os cartões

  return (
    <Container maxWidth="lg" sx={{ marginTop: spacing * 2 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: spacing * 2 }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: spacing,
          marginBottom: spacing * 2,
        }}
      >
        <Box sx={{ minHeight: cardHeight }}>
          <MaiorVendaCard />
        </Box>
        <Box sx={{ minHeight: cardHeight }}>
          <MediaVendaCard />
        </Box>
        <Box sx={{ minHeight: cardHeight }}>
          <VendasPendentesCard />
        </Box>
        {/* Cartões Mockados ajustados para a mesma altura */}

        <Card
          sx={{ backgroundColor: "#d81b60", color: "#fff", height: cardHeight }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
              Variável 2
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
              200
            </Typography>
            <Typography sx={{ fontSize: "0.875rem" }}>Período</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: spacing,
          marginBottom: spacing * 2,
        }}
      >
        <Box>
          <VendasMensais />
        </Box>
        <Box>
          <VendasPorCategoria />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: spacing,
        }}
      >
        <Box>
          <VendasPorClientes />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
