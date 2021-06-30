import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./slices/userSlice";
import programSlice from "./slices/programSlice";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    user: userReducer,
    program: programSlice,
  });
export default createRootReducer;