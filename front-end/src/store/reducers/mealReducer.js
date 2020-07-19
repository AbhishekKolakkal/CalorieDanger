// how will i get the data for the first time still need to be done

const initState = {
  isLogin: false,
  meals: [],
  loading: false,
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_MEAL":
      console.log("CREATE_MEAL", action.meal);
      return state;
    case "CREATE_MEAL_ERROR":
      console.log("MEAL CREATE ERROR", action.err);
      return state;
    case "GET_MEALS":
      return {
        ...state,
        meals: action.payload.meals,
        loading: false,
        isLogin: action.payload.isLogin,
      };

    case "DELETE_MEAL":
      console.log("DELETE_MEAL");
      return {
        ...state,
        meals: action.payload.meals,
        loading: false,
        isLogin: action.payload.isLogin,
      };
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
