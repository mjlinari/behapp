const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class ClinicalHistory extends Model {}

ClinicalHistory.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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