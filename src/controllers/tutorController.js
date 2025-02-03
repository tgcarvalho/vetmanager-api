const TutorService = require("../services/TutorService");
const Controller = require("./controller");

const tutorService = new TutorService();

class TutorController extends Controller {
  constructor(){
    super(tutorService);
  }

  async getAllPetsByTutorId({ params }, res) {
    try {
      const pets = await this.service.getPets(parseInt(params.id));
      res.status(200).send({ status: 200, pets });
    } catch (error) {
      console.error(error);
      res.status(400).send({ status: 400, error: error.message });
    }
  }
}

module.exports = TutorController;
