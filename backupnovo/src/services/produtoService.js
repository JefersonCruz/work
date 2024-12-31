import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";

const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

const getProdutos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos`, authHeader());
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Falha ao obter produtos");
  }
};

const createProduto = async (produto) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/produtos`,
      produto,
      authHeader()
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Falha ao criar produto");
  }
};

const updateProduto = async (id, produto) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/produtos/${id}`,
      produto,
      authHeader()
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Falha ao atualizar produto"
    );
  }
};

const deleteProduto = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/produtos/${id}`,
      authHeader()
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Falha ao deletar produto"
    );
  }
};

export default {
  getProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
};
