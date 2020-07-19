export const createMeal = (meal) => {
  return {
    type: "CREATE_MEAL",
    meal: meal,
  };
};

export const getMeals = (meal) => {
  return {
    type: "GET_MEALS",
  };
};

export const deleteMeal = (id) => {
  return {
    type: "DELETE_MEAL",
    payload: id,
  };
};

export const setMealsLoading = () => {
  return {
    type: "ITEMS_LOADING",
  };
};
