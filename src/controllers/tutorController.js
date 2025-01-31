const database = require("../models");
const TutorService = require("../services/TutorService");
const Controller = require("./controller");

const tutorServices = new TutorService();

class TutorController extends Controller {
  constructor(){
    super(tutorServices);
  }

}

module.exports = TutorController;
