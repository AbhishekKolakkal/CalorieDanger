const express = require("express");
const router = express.Router();
let { content, users } = require("../../db");

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
    if (users[idx].password === password) {
      content.isLogin = true;
      res.json("Success");
    } else {
      res.status(400).json("Wrong Username or password");
    }
  }
});

router.post("/signup", (req, res) => {
  const newMeal = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  users.push(newMeal);
  res.json(content);
});

module.exports = router;
