const User = require("./user");
const Patient = require("./patient");
const ClinicalHistory = require("./clinicalHistory");
const Profession = require("./profession");

//Relations

User.hasOne(Profession)



module.exports = { User, Patient, ClinicalHistory, Profession };
