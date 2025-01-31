class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll({body: parms}, res) {
    try {
      const data = await this.entityService.fetchAll(parms);
      res.status(200).send({ status: 200, data });
    } catch (error) {
      // erro
    }
  }

  async getById(req, res){
    const { id } = req.params;
    try {
      const data = await this.entityService.getById(id);
      res.status(200).send({ status: 200, data });
    } catch (error) {
      // erro
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const update = req.body;
    try {
      const data = await this.entityService.update(update, id);
      res.status(201).send({status: 201, data});
    } catch (error) {
      //erro
    }
  }

  async create({body}, res){
    try {
      const data = await this.entityService.create(body);
      res.status(200).send({status: 200, data});
    } catch (error) {
      // error
    }

  }

  async delete({params}, res){
    const { id } = params;
    try {
      const data = this.entityService.delete(id);
      res.status(200).send({status: 200, data});
    } catch (error) {
     // error 
    }
  }
}

module.exports = Controller;
