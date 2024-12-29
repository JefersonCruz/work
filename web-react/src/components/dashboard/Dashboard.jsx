import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BuildIcon from "@mui/icons-material/Build";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Bem-vindo ao Painel Administrativo
      </Typography>

      <Grid container spacing={3}>
        {/* Card: Cadastro de Empresas */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <AddBusinessIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Cadastro de Empresas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cadastre informações da empresa, como logotipo e contato.
              </Typography>
              <Button
                component={Link}
                to="/admin/cadastro/empresas"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Cadastro de Clientes */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Cadastro de Clientes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Registre informações de clientes para criação de etiquetas.
              </Typography>
              <Button
                component={Link}
                to="/admin/cadastro/clientes"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Criação de Etiquetas */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <BuildIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Criar Etiquetas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gere etiquetas para quadros de energia, prédios e ar condicionado.
              </Typography>
              <Button
                component={Link}
                to="/admin/etiquetas"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Outros cards podem ser adicionados aqui */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
