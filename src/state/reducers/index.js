import { combineReducers } from "redux";
import CurrencyReducer from "./currency";
import dataCurrencyReducer from "./data-currency";
import valCurrencyReducer from "./val-currency";
import man from "./data-man";
import woman from "./data-woman"
import detail from "./detail"
// Combine reducer
const rootReducer = combineReducers({
  currency: CurrencyReducer,
  dataCurrency: dataCurrencyReducer,
  valCurrency: valCurrencyReducer,
  getMan: man,
  getWoman: woman,
  getDetail : detail
});
export default rootReducer;
