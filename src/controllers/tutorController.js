const database = require("../models");
const TutorService = require("../services/TutorService");
const Controller = require("./controller");

const instance = new TutorService();

class TutorController extends Controller {
  constructor(){
    super(instance);
  }

}

module.exports = TutorController;
