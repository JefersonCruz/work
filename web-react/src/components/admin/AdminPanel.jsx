import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "./Header"; // Header importado corretamente
import Footer from "./Footer"; // Footer importado corretamente
import SidebarNav from "./SidebarNav"; // SidebarNav importado corretamente
import Categoria from "../cadastros/Categoria";
import SubCategoria from "../cadastros/SubCategoria";
import Produto from "../cadastros/Produto";
import PostsList from "../posts/PostsList";
import Dashboard from "../dashboard/Dashboard";
import Sobre from "../sobre/Sobre";
import Configuracoes from "../tabelas/Configuracoes";
import ModelosTabela from "../tabelas/ModelosTabela";
import TiposQuadros from "../tabelas/TiposQuadros";
import InformacoesAdicionais from "../tabelas/InformacoesAdicionais";

const AdminPanel = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />
      
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar Nav - Menu lateral */}
        <SidebarNav />
        
        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {/* Rota base redireciona para o Dashboard */}
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<PostsList />} />
            <Route path="cadastros/categoria" element={<Categoria />} />
            <Route path="cadastros/subcategoria" element={<SubCategoria />} />
            <Route path="cadastros/produto" element={<Produto />} />
            <Route path="sobre" element={<Sobre />} />
            {/* Tabelas */}
            <Route path="tabelas/configuracoes" element={<Configuracoes />} />
            <Route path="tabelas/modelos" element={<ModelosTabela />} />
            <Route path="tabelas/tipos-quadro" element={<TiposQuadros />} />
            <Route path="tabelas/informacoes" element={<InformacoesAdicionais />} />
          </Routes>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AdminPanel;
