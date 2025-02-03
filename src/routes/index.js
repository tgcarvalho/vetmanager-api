const express = require("express");
const tutores = require("./tutoresRoutes.js")
const pacientes = require("./pacientesRoutes.js")

module.exports = app => {
    app.use(
        express.json(),
        tutores,
        pacientes
    );
};