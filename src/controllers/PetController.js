const PetService = require("../services/PetService");
const Controller = require("./controller");

const petService = new PetService();

class PetController extends Controller {
  constructor() {
    super(petService);
  }

  async create({ body, params }, res) {
    try {
      const pet = await this.service.create({
        ...body,
        tutorId: parseInt(params.id),
      });
      res.status(200).send({ status: 200, pet });
    } catch (error) {
      res.status(400).send({ status: 400, error: error.message });
    }
  }

}

module.exports = PetController;
