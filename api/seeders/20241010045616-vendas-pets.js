'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vendas', [
      { clienteId: 1, dataVenda: new Date(2024, 9, 1), valorTotal: 149.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 2, dataVenda: new Date(2024, 9, 2), valorTotal: 89.98, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 3, dataVenda: new Date(2024, 9, 3), valorTotal: 149.97, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 4, dataVenda: new Date(2024, 9, 4), valorTotal: 189.98, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 5, dataVenda: new Date(2024, 9, 5), valorTotal: 61.95, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 6, dataVenda: new Date(2024, 9, 6), valorTotal: 134.98, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 7, dataVenda: new Date(2024, 9, 7), valorTotal: 109.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 8, dataVenda: new Date(2024, 9, 8), valorTotal: 74.96, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 9, dataVenda: new Date(2024, 9, 9), valorTotal: 89.98, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 10, dataVenda: new Date(2024, 9, 10), valorTotal: 159.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 1, dataVenda: new Date(2024, 9, 11), valorTotal: 159.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 2, dataVenda: new Date(2024, 9, 12), valorTotal: 149.96, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 3, dataVenda: new Date(2024, 9, 13), valorTotal: 104.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 4, dataVenda: new Date(2024, 9, 14), valorTotal: 139.98, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 5, dataVenda: new Date(2024, 9, 15), valorTotal: 149.98, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 6, dataVenda: new Date(2024, 9, 16), valorTotal: 189.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 7, dataVenda: new Date(2024, 9, 17), valorTotal: 74.94, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 8, dataVenda: new Date(2024, 9, 18), valorTotal: 129.97, status: 'pendente', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 9, dataVenda: new Date(2024, 9, 19), valorTotal: 139.96, status: 'concluída', createdAt: new Date(), updatedAt: new Date() },
      { clienteId: 10, dataVenda: new Date(2024, 9, 20), valorTotal: 64.97, status: 'concluída', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vendas', null, {});
  }
};