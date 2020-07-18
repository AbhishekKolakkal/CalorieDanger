export const createMeal = (meal) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_MEAL", meal: meal });
  };
};
