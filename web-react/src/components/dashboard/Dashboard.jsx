import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Painel Administrativo
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, color: "text.secondary" }}>
        Navegue pelas principais funcionalidades do sistema abaixo.
      </Typography>

      <Grid container spacing={3}>
        {/* Card: Dashboard Principal */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <DashboardIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Veja o resumo das atividades e estatísticas do sistema.
              </Typography>
              <Button
                component={Link}
                to="/admin/dashboard"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Cadastro de Empresas */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <AddBusinessIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Cadastro de Empresas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cadastre informações das empresas parceiras.
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
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Cadastro de Clientes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Registre informações de clientes para gerenciamento.
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
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <BuildIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Gerar Etiquetas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Crie etiquetas personalizadas para diferentes necessidades.
              </Typography>
              <Button
                component={Link}
                to="/admin/etiquetas/gerador-etiquetas"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Configurações */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <SettingsIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Configurações
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ajuste as configurações do sistema para atender às suas necessidades.
              </Typography>
              <Button
                component={Link}
                to="/admin/tabelas/configuracoes"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Relatórios */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ "&:hover": { transform: "scale(1.03)" }, transition: "0.3s" }}>
            <CardContent>
              <AssessmentIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>
                Relatórios
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gere relatórios completos para análise de dados.
              </Typography>
              <Button
                component={Link}
                to="/admin/relatorios"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Acessar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
