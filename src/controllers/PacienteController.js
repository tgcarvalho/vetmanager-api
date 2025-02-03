const database = require("../models");
const pacienteService = require("../services/PacienteService");
const Controller = require("./controller");

const instance = new pacienteService();

class PacienteController extends Controller {
  constructor(){
    super(instance);
  }

}

module.exports = PacienteController;
