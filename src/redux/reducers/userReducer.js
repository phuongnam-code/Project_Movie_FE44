import { dang_nhap, dang_xuat, dang_ky, profile_user, edit_profile_user } from "../types/userType";
import { userLogin } from "../../config/setting";

let user_login = {};
if (localStorage.getItem(userLogin)) {
	user_login = JSON.parse(localStorage.getItem(userLogin));
}

const initialState = {
	nguoiDung: user_login,
	isLogin: false,
	userProfile: {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case dang_nhap: {
			state.nguoiDung = action.nguoiDung;
			state.isLogin = true;
			return { ...state };
		}
		case dang_ky: {
			return {};
		}
		case dang_xuat: {
			return {};
		}
		case profile_user: {
			state.userProfile = action.user;
			return { ...state };
		}

		default:
			return state;
	}
};

export default userReducer;
