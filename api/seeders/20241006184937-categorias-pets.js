'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categorias', [
      { id: '1', nome: 'alimentação', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', nome: 'cuidados pessoais', createdAt: new Date(), updatedAt: new Date() },
      { id: '3', nome: 'acessórios', createdAt: new Date(), updatedAt: new Date() },
      { id: '4', nome: 'brinquedos', createdAt: new Date(), updatedAt: new Date() },
      { id: '5', nome: 'treinamento', createdAt: new Date(), updatedAt: new Date() },
      { id: '6', nome: 'saúde', createdAt: new Date(), updatedAt: new Date() },
      { id: '7', nome: 'abrigo', createdAt: new Date(), updatedAt: new Date() },
      { id: '8', nome: 'transporte', createdAt: new Date(), updatedAt: new Date() },
      { id: '9', nome: 'moda pet', createdAt: new Date(), updatedAt: new Date() },
      { id: '10', nome: 'tecnologia para pets', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};