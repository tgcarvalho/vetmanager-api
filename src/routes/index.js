const express = require("express");
const tutoresRoutes = require("./tutoresRoutes.js")

module.exports = app => {
    app.use(
        express.json(),
        tutoresRoutes,
    );
};