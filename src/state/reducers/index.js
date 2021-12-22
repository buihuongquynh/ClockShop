import { combineReducers } from "redux";
import man from "./data-man";
import detail from "./detail"
import order from "./order"
import addCart from "./addCart"
// Combine reducer
const rootReducer = combineReducers({
  getMan: man,
  getDetail : detail,
  getOrder: order,
  addCart:addCart,
});
export default rootReducer;
