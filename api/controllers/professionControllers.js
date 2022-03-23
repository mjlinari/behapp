const { Profession } = require("../models");

class ProfessionController {
  static async getAllProfessions(req, res) {
    try {
      const professions = await Profession.findAll();
      res.status(200).send(professions);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async createProfession(req, res) {
    try {
      await Profession.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async getProfessionById(req, res) {
    try {
      const profession = await Profession.findByPk(req.params.id);
      res.status(200).send(profession);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

module.exports = ProfessionController;
