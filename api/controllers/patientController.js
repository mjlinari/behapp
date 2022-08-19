const { Patient } = require("../models");

function PatientController() {}

PatientController.prototype.newPatient = async function (req, res) {
  try {
    await Patient.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.log("ERROR", err);
  }
};

PatientController.prototype.getAllPatients = async function (req, res) {
  try {
    const patients = await Patient.findAll();
    res.status(200).send(patients);
  } catch (err) {
    console.log("ERROR", err);
  }
};

PatientController.prototype.getPatient = async function (req, res) {
  try {
    const patient = await Patient.findByPk(req.params.id);
    !patient ? res.sendStatus(404) : res.status(200).send(patient);
  } catch (err) {
    console.log("ERROR", err);
  }
};

PatientController.prototype.editPatient = async function (req, res) {
  try {
    await Patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    console.log("ERROR", err);
  }
};

module.exports = PatientController;
