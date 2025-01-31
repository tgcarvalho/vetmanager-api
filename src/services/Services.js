const { where } = require("sequelize");
const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.data = dataSource[modelName];
  }

  async fetchAll() {
    return this.data.findAll();
  }

  async getById(id) {  
    return this.data.findByPk(id);
  }  

  async update(value, id) {
    const updated = this.data.update(value, {
      where: { id: id }
    });

    return updated[0] === 0 ? false : true
  }

  async create(value){
    return this.data.create(value);
  }

  async delete(id) {
    return this.data.destroy({ where: { id } })
  }

}

module.exports = Services;
