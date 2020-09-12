import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer,";

const rootReducer = combineReducers({
	movieReducer,
	userReducer,
	alertReducer,
});

export default rootReducer;
