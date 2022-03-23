const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcryptjs")
class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

User.prototype.hash = (password, salt) => {
  return bcrypt.hash(password, salt);
};

User.beforeCreate((User) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      User.salt = salt;
      return User.hash(User.password, User.salt);
    })
    .then((hash) => (User.password = hash));
});


module.exports = User;
