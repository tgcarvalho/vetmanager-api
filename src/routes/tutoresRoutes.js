const { Router } = require("express");
const TutorController = require("../controllers/tutorController.js")

const router = Router();

router.get("/tutores", TutorController.getAll);

module.exports = router;