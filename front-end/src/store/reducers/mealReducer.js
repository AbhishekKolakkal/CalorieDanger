// how will i get the data for the first time still need to be done

const initState = {
  isLogin: false,
  meals: [],
  loading: false,
};

const mealReducer = (state = initState, action) => {
  console.log("MEAL REDUCER");
  switch (action.type) {
    case "CREATE_MEAL":
      console.log("CREATE_MEAL", action.meal);
      return state;
    case "CREATE_MEAL_ERROR":
      console.log("MEAL CREATE ERROR", action.err);
      return state;
    case "GET_MEALS":
      // console.log("MEAL CREATE ERROR", action.meals);
      return state;
    case "DELETE_MEAL":
      console.log("DELETE_MEAL");
      return state;
    case "ITEMS_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
  // return state;
};

export default mealReducer;
