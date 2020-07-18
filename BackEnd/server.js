const express = require("express");
const bodyParser = require("body-parser");

const meals = require("./routes/api/meals");

const auth = require("./routes/api/auth");

const app = express();

app.use(bodyParser.json());

app.use("/api/meals", meals);

app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server has started  on ${port}`);
});
