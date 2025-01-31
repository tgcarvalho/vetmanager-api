"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tutores",
      [
        {
          nome: "Solange Silveira",
          email: "solange@email.com",
          telefone: "(11) 99604-3127",
          cpf: "630.581.330-22",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ana Souza",
          email: "ana.souza@gmail.com",
          cpf: "123.456.789-00",
          telefone: "(11) 91234-5678",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Carlos Silva",
          email: "carlos.silva@hotmail.com",
          cpf: "234.567.890-11",
          telefone: "(21) 92345-6789",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Maria Oliveira",
          email: "maria.oliveira@yahoo.com",
          cpf: "345.678.901-22",
          telefone: "(31) 93456-7890",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "João Pereira",
          email: "joao.pereira@gmail.com",
          cpf: "456.789.012-33",
          telefone: "(41) 94567-8901",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Juliana Costa",
          email: "juliana.costa@outlook.com",
          cpf: "567.890.123-44",
          telefone: "(51) 95678-9012",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Pedro Santos",
          email: "pedro.santos@gmail.com",
          cpf: "678.901.234-55",
          telefone: "(61) 96789-0123",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Laura Lima",
          email: "laura.lima@yahoo.com",
          cpf: "789.012.345-66",
          telefone: "(71) 97890-1234",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Lucas Pereira",
          email: "lucas.pereira@hotmail.com",
          cpf: "890.123.456-77",
          telefone: "(81) 98901-2345",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Fernanda Almeida",
          email: "fernanda.almeida@live.com",
          cpf: "901.234.567-88",
          telefone: "(91) 99912-3456",
          role: "tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tutores', null, {});
  },
};
