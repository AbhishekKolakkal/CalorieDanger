const express = require("express");
const router = express.Router();
let { content } = require("../../db");

const uuid =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

router.get("/", (req, res) => {
  console.log(uuid);
  res.json(content);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  const editMeal = {
    id: req.params.id,
    title: req.body.title,
    date: req.body.date,
    calorie: req.body.calorie,
  };
  let idx = content.meals.findIndex(function (meal) {
    return meal.id === id;
  });
  if (idx === -1) {
    res.status(404).json("Not There, Something is wrong");
  } else {
    content.meals[idx] = editMeal;
    res.json(content);
  }
});

router.post("/", (req, res) => {
  const newMeal = {
    id: uuid,
    title: req.body.title,
    date: req.body.date,
    calorie: req.body.calorie,
  };
  content.meals.push(newMeal);
  res.json(content);
});

router.delete("/:id", (req, res) => {
  var id = req.params.id;
  let idx = content.meals.findIndex(function (meal) {
    return meal.id === id;
  });
  if (idx === -1) {
    res.status(404).json("Not There, Something is wrong");
  } else {
    let removed = content.meals.splice(idx, 1);
    res.json(removed);
  }
});

module.exports = router;
