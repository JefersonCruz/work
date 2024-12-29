import React, { useState } from "react";
import { Button } from "@mui/material";
import BlibliotecaModelos from "../bliblioteca/BlibliotecaModelos";

const GeradorEtiquetas = () => {
  const [modeloSelecionado, setModeloSelecionado] = useState(null);

  const handleImportarModelo = (modelo) => {
    setModeloSelecionado(modelo);
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => handleImportarModelo()}>
        Importar Modelo
      </Button>
      {modeloSelecionado && (
        <div>
          <h3>Modelo Selecionado:</h3>
          <p>Nome: {modeloSelecionado.nome}</p>
          <p>Descrição: {modeloSelecionado.descricao}</p>
          <p>Voltagem: {modeloSelecionado.voltagem}</p>
          <p>Amperagem: {modeloSelecionado.amperagem}</p>
        </div>
      )}
      <BlibliotecaModelos onImportar={handleImportarModelo} />
    </div>
  );
};

export default GeradorEtiquetas;
