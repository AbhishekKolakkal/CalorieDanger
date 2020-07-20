const express = require("express");
const router = express.Router();
let { content } = require("../../db");
const auth = require("../../middleware/auth");

let uuid =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

router.get("/", auth, (req, res) => {
  console.log(uuid);
  res.json(content);
});

router.get("/:id", auth, (req, res) => {
  let id = req.params.id;
  let oneMeal = content.meals.filter((meal) => {
    return meal.id === id;
  });
  res.json(oneMeal);
});

router.put("/:id", auth, (req, res) => {
  const editMeal = {
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    calorie: req.body.calorie,
  };
  let idx = content.meals.findIndex(function (meal) {
    return meal.id === req.body.id;
  });
  console.log(content.meals);
  console.log(editMeal);
  console.log(idx);
  if (idx === -1) {
    res.status(404).json("Not There, Something is wrong");
  } else {
    content.meals[idx] = editMeal;
    res.json("success");
  }
});

router.post("/", auth, (req, res) => {
  let isDataPresent = req.body.name && req.body.date && req.body.calorie;
  if (isDataPresent) {
    const newMeal = {
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
      name: req.body.name,
      date: req.body.date,
      calorie: req.body.calorie,
    };
    content.meals.push(newMeal);
    res.json(content);
  } else {
    res.status(400).json("Missing parameters");
  }
});

router.delete("/:id", auth, (req, res) => {
  var id = req.params.id;
  let idx = content.meals.findIndex(function (meal) {
    return meal.id === id;
  });
  if (idx === -1) {
    res.status(404).json("Not There, Something is wrong");
  } else {
    let removed = content.meals.splice(idx, 1);
    res.json(content);
  }
});

module.exports = router;
