'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subcategorias', [
      { nome: 'ração seca', categoriaId: '1', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'petiscos', categoriaId: '1', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'shampoos', categoriaId: '2', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'escovas', categoriaId: '2', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'coleiras', categoriaId: '3', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'camas', categoriaId: '3', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'bolas', categoriaId: '4', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'pelúcias', categoriaId: '4', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'clickers', categoriaId: '5', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'guias de treinamento', categoriaId: '5', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'medicamentos', categoriaId: '6', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'vitaminas', categoriaId: '6', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'casinhas', categoriaId: '7', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'gaiolas', categoriaId: '7', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'caixas de transporte', categoriaId: '8', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'cintos de segurança', categoriaId: '8', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'roupas', categoriaId: '9', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'acessórios de moda', categoriaId: '9', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'rastreador GPS', categoriaId: '10', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'alimentadores automáticos', categoriaId: '10', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subcategorias', null, {});
  }
};