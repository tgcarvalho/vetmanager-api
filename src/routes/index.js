const express = require("express");
const tutores = require("./tutoresRoutes.js")

module.exports = app => {
    app.use(
        express.json(),
        tutores
    );
};