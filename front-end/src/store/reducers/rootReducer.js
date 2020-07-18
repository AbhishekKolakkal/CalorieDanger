import authReducer from "./authReducer";
import mealReducer from "./mealReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  meal: mealReducer,
});

export default rootReducer;
