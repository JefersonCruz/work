'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('perfis', [
      { id: '1', nome: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', nome: 'vendedor', createdAt: new Date(), updatedAt: new Date() },
      { id: '3', nome: 'gerente', createdAt: new Date(), updatedAt: new Date() },
      { id: '4', nome: 'supervisor', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('perfis', null, {});
  }
};