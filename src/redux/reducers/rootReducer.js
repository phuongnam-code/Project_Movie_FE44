import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer,";
import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
	movieReducer,
	userReducer,
	alertReducer,
	adminReducer,
});

export default rootReducer;
