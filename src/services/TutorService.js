const Services = require("./Services.js");

class TutorService extends Services {
  constructor() {
    super("Tutor");
  }

  async getPets(id) {
    const tutor = await super.getById(id);
    const pets = await tutor.getPets();

    return pets
  }
}

module.exports = TutorService;
