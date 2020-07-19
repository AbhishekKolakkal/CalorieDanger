import authReducer from "./authReducer";
import mealReducer from "./mealReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  content: mealReducer,
});

export default rootReducer;
