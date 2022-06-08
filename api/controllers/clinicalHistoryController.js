const { ClinicalHistory } = require("../models");

class ClinicalHistoryController {
  static async getAllClinicalHistories(req, res) {
    try {
      const clinicalHistories = await ClinicalHistory.findAll();
      res.status(200).send(clinicalHistories);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  static async createClinicalHistory (req, res){
      try {
          await ClinicalHistory.create(req.body)
          res.sendStatus(201)

      }catch (err){
        console.log("ERROR", err)
      }
  }
}

module.exports = ClinicalHistoryController;
