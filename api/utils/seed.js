const { User,Profession,ClinicalHistory,Patient} = require("../models");
const db = require("../config/db");
const { categories, properties, locations } = require("./fakeData");

const seedProcess = async () => {
  const createAdmin =  User.create({
    name: "Admin",
    lastname: "Super",
    email: "admin@gmail.com",
    password: "password",
    isAdmin: true,
  });
  const seedUsers =  Location.bulkCreate(locations);
  const seedProfessions =  Category.bulkCreate(categories);
  const seedProperties =  Property.bulkCreate(properties);

  await Promise.all([seedLocations,seedCategories,seedProperties, createAdmin])

};

db.sync()
  .then(seedProcess)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });