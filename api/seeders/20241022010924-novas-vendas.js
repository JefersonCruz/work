'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vendas = [];
    const dataAtual = new Date();
    const createdAt = new Date();
    const updatedAt = new Date();

    for (let mes = 0; mes < 12; mes++) {
      for (let dia = 1; dia <= 10; dia++) { // 10 vendas por mês para variedade
        vendas.push({
          clienteId: (dia % 10) + 1, // Distribui clientes de 1 a 10
          dataVenda: new Date(2024, mes, dia),
          valorTotal: parseFloat((Math.random() * 200 + 50).toFixed(2)), // Valor entre 50 e 250
          status: dia % 3 === 0 ? 'pendente' : 'concluída', // Alterna status
          createdAt,
          updatedAt
        });
      }
    }

    await queryInterface.bulkInsert('vendas', vendas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vendas', null, {});
  }
};