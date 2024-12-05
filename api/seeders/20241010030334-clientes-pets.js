'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clientes', [
      {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Santos',
        email: 'maria.santos@email.com',
        telefone: '(21) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        telefone: '(31) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Rodrigues',
        email: 'ana.rodrigues@email.com',
        telefone: '(41) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos Ferreira',
        email: 'carlos.ferreira@email.com',
        telefone: '(51) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mariana Costa',
        email: 'mariana.costa@email.com',
        telefone: '(61) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lucas Almeida',
        email: 'lucas.almeida@email.com',
        telefone: '(71) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Juliana Martins',
        email: 'juliana.martins@email.com',
        telefone: '(81) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Roberto Souza',
        email: 'roberto.souza@email.com',
        telefone: '(91) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fernanda Lima',
        email: 'fernanda.lima@email.com',
        telefone: '(12) 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};