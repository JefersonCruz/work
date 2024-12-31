import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";

import AdminPanel from "./components/admin/AdminPanel";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./components/common/NotFound"; // Novo componente para rotas inexistentes

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro/>} />
        

        {/* Rotas Protegidas */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        

        {/* Rota para Página Não Encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
