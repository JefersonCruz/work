'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const especies = ['Cachorro', 'Gato', 'Pássaro', 'Peixe', 'Hamster', 'Coelho', 'Tartaruga', 'Porquinho da Índia'];
    const nomes = ['Max', 'Luna', 'Rex', 'Mia', 'Thor', 'Nala', 'Bob', 'Lola', 'Rocky', 'Simba', 'Charlie', 'Bella', 'Buddy', 'Lucy', 'Duke', 'Molly', 'Oscar', 'Chloe', 'Cooper', 'Tiger'];

    const pets = Array.from({ length: 20 }, (_, index) => ({
      nome: nomes[index],
      idade: Math.floor(Math.random() * 15) + 1, // Idade aleatória entre 1 e 15
      especie: especies[Math.floor(Math.random() * especies.length)],
      clienteId: Math.floor(Math.random() * 10) + 1, // Assumindo que você tem 10 clientes
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('pets', pets, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pets', null, {});
  }
};