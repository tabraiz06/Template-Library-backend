const express = require("express");
const Template = require("../models/templateModel");
const Router = express.Router();
Router.get("/api/templates", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = Router;
