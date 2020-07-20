const express = require("express");
const router = express.Router();
let { content, users } = require("../../db");
const bcrypt = require("bcryptjs");

// const uuid =
//   Math.random().toString(36).substring(2, 15) +
//   Math.random().toString(36).substring(2, 15);

router.get("/login", (req, res) => {
  let email = req.headers.email;
  let password = req.headers.password;
  let idx = users.findIndex(function (user) {
    return user.email === email;
  });
  if (idx === -1) {
    res.status(404).json("Email Not Found, Please SignUp");
  } else {
    bcrypt.compare(password, users[idx].password, function (err, matched) {
      if (matched) {
        content.isLogin = true;
        res.json(content);
      } else {
        res.status(400).json("Wrong email or password");
      }
    });
  }
});

router.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      users.push(newUser);
      res.json("Success");
    });
  });
});

module.exports = router;
