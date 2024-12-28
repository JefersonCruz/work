// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import AdminPanel from "./components/admin/AdminPanel";
import Configuracoes from "./components/tabelas/Configuracoes";
import ModelosTabela from "./components/tabelas/ModelosTabela";
import TiposQuadros from "./components/tabelas/TiposQuadros";
import InformacoesAdicionais from "./components/tabelas/InformacoesAdicionais";

import ProtectedRoute from "./routes/ProtectedRoute";

// Corrigindo os caminhos de importação conforme a estrutura do projeto

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para login */}
          <Route path="/" element={<Login />} />

          {/* Rota protegida para painel administrativo */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* Rotas específicas para tabelas */}
          <Route
            path="/tabelas/configuracoes"
            element={
              <ProtectedRoute>
                <Configuracoes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tabelas/modelos"
            element={
              <ProtectedRoute>
                <ModelosTabela />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tabelas/tipos-quadro"
            element={
              <ProtectedRoute>
                <TiposQuadros />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tabelas/informacoes"
            element={
              <ProtectedRoute>
                <InformacoesAdicionais />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
