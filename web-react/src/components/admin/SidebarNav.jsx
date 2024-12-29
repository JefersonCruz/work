import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ConstructionIcon from "@mui/icons-material/Construction";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt"; // Ícone para gerenciamento de etiquetas
import AddBoxIcon from "@mui/icons-material/AddBox"; // Ícone para Gerador de Etiquetas
import TableChartIcon from "@mui/icons-material/TableChart"; // Ícone para Editable Table
import CircuitryIcon from "@mui/icons-material/ElectricalServices"; // Ícone para Circuit Config
import logo from "../../assets/logo.svg"; // Importando o logo

const SidebarNav = () => {
  const drawerWidth = 240;
  const [openTabelas, setOpenTabelas] = useState(false);
  const [openEtiquetas, setOpenEtiquetas] = useState(false);

  // Funções para alternar a visibilidade dos submenus
  const handleClickTabelas = () => {
    setOpenTabelas(!openTabelas);
  };

  const handleClickEtiquetas = () => {
    setOpenEtiquetas(!openEtiquetas);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
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
        <img
          src={logo}
          alt="Logo"
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
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

        {/* Submenu Tabelas */}
        <ListItem button onClick={handleClickTabelas}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Tabelas" />
          {openTabelas ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTabelas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/tabelas/configuracoes" sx={{ pl: 4 }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItem>
            <ListItem button component={Link} to="/admin/tabelas/modelos" sx={{ pl: 4 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Modelos de Tabela" />
            </ListItem>
            <ListItem button component={Link} to="/admin/tabelas/editable-table" sx={{ pl: 4 }}>
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Editable Table" />
            </ListItem>
            <ListItem button component={Link} to="/admin/tabelas/circuit-config" sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircuitryIcon />
              </ListItemIcon>
              <ListItemText primary="Circuit Config" />
            </ListItem>
          </List>
        </Collapse>

        {/* Submenu Etiquetas */}
        <ListItem button onClick={handleClickEtiquetas}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="Etiquetas" />
          {openEtiquetas ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEtiquetas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/admin/etiquetas/etiqueta-quadro" sx={{ pl: 4 }}>
              <ListItemIcon>
                <ConstructionIcon />
              </ListItemIcon>
              <ListItemText primary="Quadros de Distribuição" />
            </ListItem>
            <ListItem button component={Link} to="/admin/etiquetas/etiqueta-arcondicionado" sx={{ pl: 4 }}>
              <ListItemIcon>
                <ConstructionIcon />
              </ListItemIcon>
              <ListItemText primary="Ar Condicionado" />
            </ListItem>
            <ListItem button component={Link} to="/admin/etiquetas/etiqueta-alarme-incendio" sx={{ pl: 4 }}>
              <ListItemIcon>
                <FireExtinguisherIcon />
              </ListItemIcon>
              <ListItemText primary="Alarmes de Incêndio" />
            </ListItem>
            <ListItem button component={Link} to="/admin/etiquetas/etiquetas-predios" sx={{ pl: 4 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Etiquetas para Prédios" />
            </ListItem>
            <ListItem button component={Link} to="/admin/etiquetas/gerenciamento" sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Gerenciamento de Etiquetas" />
            </ListItem>
            <ListItem button component={Link} to="/admin/etiquetas/gerador-etiquetas" sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Gerador de Etiquetas" />
            </ListItem>
          </List>
        </Collapse>

        {/* Cadastro de Empresas */}
        <ListItem button component={Link} to="/admin/cadastro/empresas">
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Cadastro de Empresas" />
        </ListItem>

        {/* Cadastro de Clientes */}
        <ListItem button component={Link} to="/admin/cadastro/clientes">
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Cadastro de Clientes" />
        </ListItem>

        {/* Gerenciamento de Clientes */}
        <ListItem button component={Link} to="/admin/cadastro/gerenciar-clientes">
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Gerenciar Clientes" />
        </ListItem>

        {/* Sobre */}
        <ListItem button component={Link} to="/admin/sobre">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Sobre" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarNav;
