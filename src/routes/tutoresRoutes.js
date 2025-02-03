const { Router } = require("express");
const TutorController = require("../controllers/tutorController.js")
const PetController = require("../controllers/petController.js")

const tutorController = new TutorController();
const petController = new PetController();

const router = Router();

router.get("/tutores", (req, res) => tutorController.getAll(req, res));
router.post("/tutores", (req, res) => tutorController.create(req, res));
router.get("/tutores/:id", (req, res) => tutorController.getById(req, res));
router.put("/tutores/:id", (req, res) => tutorController.update(req, res));
router.get("/tutores/:id/pets", (req, res) => tutorController.getAllPetsByTutorId(req, res));
router.post("/tutores/:id/pets", (req, res) => petController.create(req, res));
// router.delete("/tutores/:id", (req, res) => tutorController.delete(req, res));

module.exports = router;