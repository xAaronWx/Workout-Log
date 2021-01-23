const router = require("express").Router();
const User = require("../db").import("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", function (req, res) {
  User.create({
    username: req.body.username,
    passwordhash: bcrypt.hashSync(req.body.passwordhash),
  })
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      res.json({
        user: user,
        message: "Your account has been made",
        sessionToken: token,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
