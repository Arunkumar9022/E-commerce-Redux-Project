import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ItemReducer from "./ItemsReducer";

const RootReducer=combineReducers({
  ItemsReducer : ItemReducer,
  CartReducer : CartReducer
})
export default RootReducer;