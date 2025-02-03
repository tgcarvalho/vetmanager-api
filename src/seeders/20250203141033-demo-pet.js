"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          nome: "Bud Mariu",
          nascimento: new Date("2024-01-01"),
          especie: "cães",
          raca: "Spitz Alemão",
          tutorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
