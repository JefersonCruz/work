'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vendas_itens', [
      // Venda 1
      { vendaId: 1, produtoId: 1, quantidade: 1, precoUnitario: 89.99, subtotal: 89.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 1, produtoId: 2, quantidade: 2, precoUnitario: 29.99, subtotal: 59.98, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 2
      { vendaId: 2, produtoId: 3, quantidade: 1, precoUnitario: 39.99, subtotal: 39.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 2, produtoId: 4, quantidade: 1, precoUnitario: 49.99, subtotal: 49.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 3
      { vendaId: 3, produtoId: 5, quantidade: 2, precoUnitario: 34.99, subtotal: 69.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 3, produtoId: 6, quantidade: 1, precoUnitario: 79.99, subtotal: 79.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 4
      { vendaId: 4, produtoId: 7, quantidade: 1, precoUnitario: 59.99, subtotal: 59.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 4, produtoId: 8, quantidade: 1, precoUnitario: 129.99, subtotal: 129.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 5
      { vendaId: 5, produtoId: 9, quantidade: 2, precoUnitario: 24.99, subtotal: 49.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 5, produtoId: 10, quantidade: 3, precoUnitario: 3.99, subtotal: 11.97, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 6
      { vendaId: 6, produtoId: 11, quantidade: 1, precoUnitario: 89.99, subtotal: 89.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 6, produtoId: 12, quantidade: 1, precoUnitario: 44.99, subtotal: 44.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 7
      { vendaId: 7, produtoId: 13, quantidade: 1, precoUnitario: 69.99, subtotal: 69.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 7, produtoId: 14, quantidade: 2, precoUnitario: 19.99, subtotal: 39.98, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 8
      { vendaId: 8, produtoId: 15, quantidade: 1, precoUnitario: 29.99, subtotal: 29.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 8, produtoId: 16, quantidade: 3, precoUnitario: 14.99, subtotal: 44.97, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 9
      { vendaId: 9, produtoId: 17, quantidade: 1, precoUnitario: 54.99, subtotal: 54.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 9, produtoId: 18, quantidade: 1, precoUnitario: 34.99, subtotal: 34.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 10
      { vendaId: 10, produtoId: 19, quantidade: 2, precoUnitario: 39.99, subtotal: 79.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 10, produtoId: 20, quantidade: 1, precoUnitario: 79.99, subtotal: 79.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 11
      { vendaId: 11, produtoId: 1, quantidade: 1, precoUnitario: 89.99, subtotal: 89.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 11, produtoId: 5, quantidade: 2, precoUnitario: 34.99, subtotal: 69.98, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 12
      { vendaId: 12, produtoId: 2, quantidade: 3, precoUnitario: 29.99, subtotal: 89.97, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 12, produtoId: 7, quantidade: 1, precoUnitario: 59.99, subtotal: 59.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 13
      { vendaId: 13, produtoId: 3, quantidade: 2, precoUnitario: 39.99, subtotal: 79.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 13, produtoId: 9, quantidade: 1, precoUnitario: 24.99, subtotal: 24.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 14
      { vendaId: 14, produtoId: 4, quantidade: 1, precoUnitario: 49.99, subtotal: 49.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 14, produtoId: 11, quantidade: 1, precoUnitario: 89.99, subtotal: 89.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 15
      { vendaId: 15, produtoId: 6, quantidade: 1, precoUnitario: 79.99, subtotal: 79.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 15, produtoId: 13, quantidade: 1, precoUnitario: 69.99, subtotal: 69.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 16
      { vendaId: 16, produtoId: 8, quantidade: 1, precoUnitario: 129.99, subtotal: 129.99, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 16, produtoId: 15, quantidade: 2, precoUnitario: 29.99, subtotal: 59.98, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 17
      { vendaId: 17, produtoId: 10, quantidade: 5, precoUnitario: 3.99, subtotal: 19.95, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 17, produtoId: 17, quantidade: 1, precoUnitario: 54.99, subtotal: 54.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 18
      { vendaId: 18, produtoId: 12, quantidade: 2, precoUnitario: 44.99, subtotal: 89.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 18, produtoId: 19, quantidade: 1, precoUnitario: 39.99, subtotal: 39.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 19
      { vendaId: 19, produtoId: 14, quantidade: 3, precoUnitario: 19.99, subtotal: 59.97, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 19, produtoId: 20, quantidade: 1, precoUnitario: 79.99, subtotal: 79.99, createdAt: new Date(), updatedAt: new Date() },
      
      // Venda 20
      { vendaId: 20, produtoId: 16, quantidade: 2, precoUnitario: 14.99, subtotal: 29.98, createdAt: new Date(), updatedAt: new Date() },
      { vendaId: 20, produtoId: 18, quantidade: 1, precoUnitario: 34.99, subtotal: 34.99, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vendas_itens', null, {});
  }
};