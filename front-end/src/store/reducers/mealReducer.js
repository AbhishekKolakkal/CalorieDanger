const initState = {
  meals: [
    { id: "1", title: "Breakfast", calorie: 2000 },
    { id: "2", title: "Lunch", calorie: 2000 },
    { id: "3", title: "Dinner", calorie: 2000 },
  ],
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_MEAL":
      console.log("meal created", action.meal);
  }
  return state;
};

export default mealReducer;
