'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsTo(models.Tutor, { foreignKey: 'tutorId', as: 'tutor' });
    }
  }
  Pet.init({
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    especie: DataTypes.STRING,
    raca: DataTypes.STRING,
    tutorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Pet',
    tableName: 'pets'
  });
  return Pet;
};