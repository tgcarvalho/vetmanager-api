'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paciente.init({
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    especie: DataTypes.STRING,
    raca: DataTypes.STRING,
    tutor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Paciente',
    tableName: "pacientes"
  });
  return Paciente;
};