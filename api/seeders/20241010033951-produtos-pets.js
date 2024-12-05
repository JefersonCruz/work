'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Ração Premium para Cães Adultos',
        preco: 89.99,
        categoriaId: 1, // Alimentação
        subcategoriaId: 1, // Ração seca
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Shampoo Hipoalergênico para Pets',
        preco: 29.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 2, // Higiene
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Coleira Antipulgas para Gatos',
        preco: 39.99,
        categoriaId: 3, // Acessórios
        subcategoriaId: 3, // Coleiras
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Brinquedo Interativo para Cães',
        preco: 49.99,
        categoriaId: 4, // Brinquedos
        subcategoriaId: 4, // Brinquedos interativos
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Tapete Higiênico para Cães',
        preco: 34.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 5, // Higiene
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Arranhador para Gatos',
        preco: 79.99,
        categoriaId: 4, // Brinquedos
        subcategoriaId: 6, // Arranhadores
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Suplemento Vitamínico para Pets',
        preco: 59.99,
        categoriaId: 6, // Saúde
        subcategoriaId: 7, // Suplementos
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cama Ortopédica para Cães',
        preco: 129.99,
        categoriaId: 7, // Abrigo
        subcategoriaId: 8, // Camas
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Escova Removedora de Pelos',
        preco: 24.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 9, // Escovação
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ração Úmida para Gatos',
        preco: 3.99,
        categoriaId: 1, // Alimentação
        subcategoriaId: 10, // Ração úmida
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Caixa de Transporte para Pets',
        preco: 89.99,
        categoriaId: 8, // Transporte
        subcategoriaId: 11, // Caixas de transporte
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Roupa de Inverno para Cães',
        preco: 44.99,
        categoriaId: 9, // Moda pet
        subcategoriaId: 12, // Roupas
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bebedouro Automático para Pets',
        preco: 69.99,
        categoriaId: 10, // Tecnologia para pets
        subcategoriaId: 13, // Bebedouros automáticos
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Petisco Natural para Cães',
        preco: 19.99,
        categoriaId: 1, // Alimentação
        subcategoriaId: 14, // Petiscos
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Areia Higiênica para Gatos',
        preco: 29.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 15, // Higiene
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Brinquedo de Pelúcia para Pets',
        preco: 14.99,
        categoriaId: 4, // Brinquedos
        subcategoriaId: 16, // Brinquedos de pelúcia
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Comedouro Elevado para Cães',
        preco: 54.99,
        categoriaId: 1, // Alimentação
        subcategoriaId: 17, // Comedouros
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Shampoo Seco para Pets',
        preco: 34.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 18, // Higiene
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Guia Retrátil para Passeio',
        preco: 39.99,
        categoriaId: 3, // Acessórios
        subcategoriaId: 19, // Guias
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Caixa de Areia Coberta para Gatos',
        preco: 79.99,
        categoriaId: 2, // Cuidados pessoais
        subcategoriaId: 20, // Higiene
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};