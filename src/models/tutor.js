'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutor.hasMany(models.Pet, { foreignKey: 'tutorId', as: 'pets' });
    }
  }
  Tutor.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tutor',
    tableName: "tutores"
  });
  return Tutor;
};