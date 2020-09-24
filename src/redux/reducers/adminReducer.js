import { edit_user, find_user, get_movie_list, get_user_list } from "../types/adminType";

const initialState = {
	dsNguoiDung: [],
	dsPhim: [],
	editUser: {},
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case get_user_list: {
			state.dsNguoiDung = action.dsNguoiDung;
			return { ...state };
		}
		case get_movie_list: {
			state.dsPhim = action.dsPhim;
			return { ...state };
		}
		case edit_user: {
			state.editUser = action.user;
			return { ...state };
		}
		case "FIND_USER": {
			state.dsNguoiDung = action.searchResult;
			return { ...state };
		}
		default:
			return state;
	}
};

export default adminReducer;
