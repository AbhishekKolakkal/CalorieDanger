const { content } = require("../db");

function auth(req, res, next) {
  if (!content.isLogin) {
    res.status(401).json("Not Logged in");
  } else {
    next();
  }
}

module.exports = auth;
