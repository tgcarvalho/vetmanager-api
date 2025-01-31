const { Router } = require("express");
const TutorController = require("../controllers/tutorController.js")

const tutorController = new TutorController();

const router = Router();

router.get("/tutores", (req, res) => tutorController.getAll(req, res));
router.post("/tutores", (req, res) => tutorController.create(req, res));
router.get("/tutores/:id", (req, res) => tutorController.getById(req, res));
router.put("/tutores/:id", (req, res) => tutorController.update(req, res));
router.delete("/tutores/:id", (req, res) => tutorController.delete(req, res));

module.exports = router;