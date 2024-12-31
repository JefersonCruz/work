import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";
import SidebarNav from "./SidebarNav";
import ChatSupportPage from "../chat/ChatSupportPage";

// Importação direta dos componentes
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
import EtiquetaQuadro from "../etiquetas/EtiquetaQuadro";
import EtiquetaArCondicionado from "../etiquetas/EtiquetaArCondicionado";
import EtiquetaAlarmeIncendio from "../etiquetas/EtiquetaAlarmeIncendio";
import CadastroEmpresas from "../cadastro/CadastroEmpresas";
import CadastroClientes from "../cadastro/CadastroClientes";
import EtiquetasPredios from "../etiquetas/EtiquetasPredios";
import GerenciamentoEtiquetas from "../etiquetas/GerenciamentoEtiquetas";
import GeradorEtiquetas from "../etiquetas/GeradorEtiquetas";
import ModeloEtiquetas from "../etiquetas/ModeloEtiquetas";
import GerenciarClientes from "../cadastro/GerenciarClientes";
import EditableTable from "../tabelas/EditableTable";
import CircuitConfig from "../tabelas/CircuitConfig";
import QRCodeGenerator from "../tabelas/QRCodeGenerator";
import LabelCustomizationTools from "../customization/LabelCustomizationTools";
import ConfigPanel from "../admin/ConfigPanel";
import IconSelector from "../icone/IconSelector";
import IconConfigurator from "../icone/IconConfigurator";
const AdminPanel = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <SidebarNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {/* Rota base para o Dashboard */}
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<PostsList />} />

            {/* Rotas para Cadastros */}
            <Route path="cadastros/categoria" element={<Categoria />} />
            <Route path="cadastros/subcategoria" element={<SubCategoria />} />
            <Route path="cadastros/produto" element={<Produto />} />
            <Route path="cadastro/empresas" element={<CadastroEmpresas />} />
            <Route path="cadastro/clientes" element={<CadastroClientes />} />
            <Route path="cadastro/gerenciar-clientes" element={<GerenciarClientes />} />

            {/* Rotas para Tabelas */}
            <Route path="tabelas/configuracoes" element={<Configuracoes />} />
            <Route path="tabelas/modelos" element={<ModelosTabela />} />
            <Route path="tabelas/tipos-quadro" element={<TiposQuadros />} />
            <Route path="tabelas/informacoes" element={<InformacoesAdicionais />} />
            <Route path="tabelas/editable-table" element={<EditableTable />} />
            <Route path="tabelas/circuit-config" element={<CircuitConfig />} />
            <Route path="tabelas/qr-code-generator" element={<QRCodeGenerator />} />

            {/* Rotas para Personalização */}
            <Route path="customization/label-tools" element={<LabelCustomizationTools />} />

            {/* Rota para IconSelector */}
            <Route path="icone/quadro-distribuicao" element={<IconSelector />} />
            <Route path="icone/configuracao" element={<IconConfigurator />} />

            {/* Rotas para Configurações Administrativas */}
            <Route path="config-panel" element={<ConfigPanel />} />

            {/* Rotas para Etiquetas */}
            <Route path="etiquetas/etiqueta-alarme-incendio" element={<EtiquetaAlarmeIncendio />} />
            <Route path="etiquetas/etiqueta-arcondicionado" element={<EtiquetaArCondicionado />} />
            <Route path="etiquetas/etiqueta-quadro" element={<EtiquetaQuadro />} />
            <Route path="etiquetas/etiquetas-predios" element={<EtiquetasPredios />} />
            <Route path="etiquetas/gerenciamento" element={<GerenciamentoEtiquetas />} />
            <Route path="etiquetas/gerador-etiquetas" element={<GeradorEtiquetas />} />
            <Route path="etiquetas/modelos" element={<ModeloEtiquetas />} />

            {/* Página do Chat de Suporte */}
            <Route path="chat-suporte" element={<ChatSupportPage />} />

            {/* Página Sobre */}
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </Box>
      </Box>
      {/* Componente de Suporte Flutuante */}
      <ChatSupportPage style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }} />
      <Footer />
    </Box>
  );
};

export default AdminPanel;
