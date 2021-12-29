const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// encryption
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(
//   session({
//     secret: "SECRET",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/userDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   googleId: String,
//   secret: String,
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);
// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/secrets",
//       // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       console.log(profile);
//       // find id, or create it if it isnt in DB
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.route("/auth/google").get(
//   passport.authenticate("google", {
//     scope: ["profile"],
//   })
// );

// app.get(
//   "/auth/google/secrets",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect secrets.
//     res.redirect("/secrets");
//   }
// );

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port " + this.address().port);
});
