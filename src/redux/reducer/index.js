import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import userReducer from "./user";
import infoReducer from "./info";
import searchReducer from "./search";
import adminReducer from "./admin";

export default combineReducers({
  auth: loginReducer,
  register: registerReducer,
  user: userReducer,
  info: infoReducer,
  search: searchReducer,
  admin: adminReducer,
});
