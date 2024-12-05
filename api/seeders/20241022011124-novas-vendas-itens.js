'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vendasItens = [];
    const createdAt = new Date();
    const updatedAt = new Date();

    // Assumindo que temos 140 vendas, cada uma com pelo menos um item
    for (let vendaId = 21; vendaId <= 140; vendaId++) { // IDs de 21 a 140 conforme suas vendas
      const numeroItens = Math.floor(Math.random() * 3) + 1; // Cada venda tem de 1 a 3 itens

      for (let item = 0; item < numeroItens; item++) {
        const produtoId = (item % 20) + 1; // Assumindo 20 produtos, distribui ciclicamente
        const quantidade = Math.floor(Math.random() * 5) + 1; // Quantidade entre 1 e 5
        const precoUnitario = parseFloat((Math.random() * 50 + 10).toFixed(2)); // Preço entre 10 e 60
        const subtotal = parseFloat((precoUnitario * quantidade).toFixed(2));

        vendasItens.push({
          vendaId,
          produtoId,
          quantidade,
          precoUnitario,
          subtotal,
          createdAt,
          updatedAt
        });
      }
    }

    await queryInterface.bulkInsert('vendas_itens', vendasItens, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vendas_itens', null, {});
  }
};