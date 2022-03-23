const express = require("express");
const app = express();
const volleyball = require("volleyball");
const db = require("./config/db");
const router = require("./routes")
const {User, Patient, ClinicalHistory, Profession} = require("./models")


app.use(volleyball);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router)

db.sync({ force: false }).then(
  app.listen(3001, () => {
    console.log("listening at port 3001");
  })
);
