const { Router } = require("express");
const PacienteController = require("../controllers/PacienteController.js");

const pacienteController = new PacienteController();

const router = Router();

router.get("/pacientes", (req, res) => pacienteController.getAll(req, res));
router.post("/pacientes", (req, res) => pacienteController.create(req, res));
router.get("/pacientes/:id", (req, res) => pacienteController.getById(req, res));
router.put("/pacientes/:id", (req, res) => pacienteController.update(req, res));
router.delete("/pacientes/:id", (req, res) => pacienteController.delete(req, res));

module.exports = router;