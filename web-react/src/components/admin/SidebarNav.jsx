import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Settings as SettingsIcon,
  TableChart as TableChartIcon,
  Build as BuildIcon,
  Palette as PaletteIcon,
  Chat as ChatIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import logo from "../../assets/logo.svg";

const SidebarNav = () => {
  const [openCategories, setOpenCategories] = useState({
    gerenciamento: false,
    tabelas: false,
    etiquetas: false,
    personalizacao: false,
  });

  const handleToggle = (category) => {
    setOpenCategories({ ...openCategories, [category]: !openCategories[category] });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      {/* Header do Menu */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          height: 64,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
        <Typography variant="h6" noWrap>
          Sistema de Etiquetas
        </Typography>
      </Box>

      <List>
        {/* Dashboard */}
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Gerenciamento */}
        <ListItem button onClick={() => handleToggle("gerenciamento")}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Gerenciamento" />
          {openCategories.gerenciamento ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategories.gerenciamento} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/cadastro/clientes" sx={{ pl: 4 }}>
              <ListItemText primary="Clientes" />
            </ListItem>
            <ListItem button component={Link} to="/admin/cadastro/empresas" sx={{ pl: 4 }}>
              <ListItemText primary="Empresas" />
            </ListItem>
          </List>
        </Collapse>

        {/* Tabelas */}
        <ListItem button onClick={() => handleToggle("tabelas")}>
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tabelas" />
          {openCategories.tabelas ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategories.tabelas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/tabelas/modelos" sx={{ pl: 4 }}>
              <ListItemText primary="Modelos de Tabela" />
            </ListItem>
            <ListItem button component={Link} to="/admin/tabelas/configuracoes" sx={{ pl: 4 }}>
              <ListItemText primary="Configurações de Circuitos" />
            </ListItem>
          </List>
        </Collapse>

        {/* Etiquetas */}
        <ListItem button onClick={() => handleToggle("etiquetas")}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Etiquetas" />
          {openCategories.etiquetas ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategories.etiquetas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/etiquetas/gerador-etiquetas" sx={{ pl: 4 }}>
              <ListItemText primary="Gerar Etiquetas" />
            </ListItem>
          </List>
        </Collapse>

        {/* Personalização */}
        <ListItem button onClick={() => handleToggle("personalizacao")}>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary="Personalização" />
          {openCategories.personalizacao ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategories.personalizacao} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/customization/label-tools" sx={{ pl: 4 }}>
              <ListItemText primary="Configuração de Logotipo" />
            </ListItem>
          </List>
        </Collapse>

        {/* Chat de Suporte */}
        <Divider sx={{ my: 2 }} />
        <ListItem button component={Link} to="/admin/chat-suporte">
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat de Suporte" />
        </ListItem>

        {/* Configurador de Cards */}
        <ListItem button component={Link} to="/admin/cards/configurator">
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Configurar Cards" />
        </ListItem>

        {/* Quadro de Distribuição */}
        <ListItem button component={Link} to="/admin/icone/quadro-distribuicao">
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Quadro de Distribuição" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarNav;
