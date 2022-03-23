const {DataTypes,Model}= require("sequelize")
const db = require("../config/db")

class Profession extends Model{}

Profession.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    modelName:"Profession"
})

module.exports = Profession