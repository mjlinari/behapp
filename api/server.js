const express = require("express");
const app = express();
const volleyball = require("volleyball");
const db = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User, Patient, ClinicalHistory, Profession } = require("./models");

app.use(volleyball);
app.use(express.json());
app.use(cookieParser()); //This won´t be necessary according to the express-session documentation
app.use(session({ secret: "behapp", resave: false, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ 
          where:{
            email:email
          }
        })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});


app.use("/api", router);

db.sync({ force: false }).then(
  app.listen(3001, () => {
    console.log("listening at port 3001");
  })
);
