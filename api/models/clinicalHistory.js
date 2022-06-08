const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class ClinicalHistory extends Model {}

ClinicalHistory.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "ClinicalHistory",
  }
);

module.exports = ClinicalHistory