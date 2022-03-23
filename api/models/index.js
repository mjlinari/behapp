const User = require("./user");
const Patient = require("./patient");
const ClinicalHistory = require("./clinicalHistory");
const Profession = require("./profession");

//Relations

User.hasOne(Profession, { as: "Profession", foreignKey: "userId" });
User.belongsToMany(Patient, {
  through: "patientsOf",
  foreignKey: "userId",
  otherKey: "patientsId",
});
Patient.belongsToMany(User, {
  through: "terapistOf",
  foreignKey: "patinetId",
  otherKey: "usersId",
});




module.exports = { User, Patient, ClinicalHistory, Profession };
