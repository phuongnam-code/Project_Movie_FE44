import { alertTypes } from "../types/alertType";

const initialState = {
	message: "",
};

const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case alertTypes.SUCCESS:
			return {
				...state,
				message: action.message,
			};
		case alertTypes.ERROR:
			return {
				...state,
				message: action.message,
			};
		case alertTypes.CLEAR:
			return {};
		default:
			return state;
	}
};

export default alertReducer;
