"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adiciona o campo 'imagem' à tabela 'produtos'
    await queryInterface.addColumn("produtos", "imagem", {
      type: Sequelize.STRING, // O tipo de dado será STRING, que armazenará o caminho da imagem
      allowNull: true, // O campo pode ser nulo se o produto não tiver imagem
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverte a alteração, removendo a coluna 'imagem' caso precise desfazer a migration
    await queryInterface.removeColumn("produtos", "imagem");
  },
};
