const Services = require("./Services.js");
const TutorService = require("./TutorService.js");

class PetService extends Services {
    constructor() {
        super('Pet')
        this.tutorService = new TutorService();
    }

    async create(pet) {
        const { tutorId } = pet;
        const tutor = await this.tutorService.getById(tutorId);
        if (!tutor) {
            throw new Error('Tutor não encontrado!');
        }
        const newPet = await this.data.create(pet);
        return newPet;    
    }
}

module.exports = PetService;