import axios from "axios";

export const createMeal = (meal) => (dispatch) => {
  axios.post("api/meals", meal).then((res) => {
    console.log(res);
    dispatch({
      type: "CREATE_MEALS",
      payload: res.data,
    });
  });
};

export const getMeals = () => (dispatch) => {
  dispatch(setMealsLoading());
  axios.get("api/meals").then((res) =>
    dispatch({
      type: "GET_MEALS",
      payload: res.data,
    })
  );
};

export const deleteMeal = (id) => (dispatch) => {
  axios.delete(`api/meals/${id}`).then((res) => {
    console.log(res);
    dispatch({
      type: "DELETE_MEAL",
      payload: res.data,
    });
  });
};

export const setMealsLoading = () => {
  return {
    type: "ITEMS_LOADING",
  };
};
