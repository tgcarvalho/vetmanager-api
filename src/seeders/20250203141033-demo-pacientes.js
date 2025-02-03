"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pacientes",
      [
        {
          nome: "Bud Mariu",
          data_nascimento: new Date("2024-01-01"),
          especie: "cães",
          raca: "Spitz Alemão",
          tutor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pacientes", null, {});
  },
};
