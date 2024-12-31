import axios from "axios";

const API_URL = "http://localhost:5000/api/etiquetas";

export const criarEtiqueta = async (dados, imagem) => {
  const formData = new FormData();
  formData.append("nome", dados.nome);
  formData.append("voltagem", dados.voltagem);
  formData.append("amperagem", dados.amperagem);
  formData.append("descricao", dados.descricao);
  formData.append("dataInstalacao", dados.dataInstalacao);
  if (imagem) {
    formData.append("imagem", imagem);
  }

  return await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const buscarEtiquetas = async () => {
  return await axios.get(API_URL);
};
