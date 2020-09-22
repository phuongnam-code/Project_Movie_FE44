import axios from "axios";
import { dang_nhap, dang_xuat, dang_ky, profile_user, edit_profile_user } from "../types/userType";
import { userLogin, accessToken, LOGIN_URL, SIGNUP_URL, PROFILE_URL, PROFILE_CHANGE_URL, DAT_VE_URL, EDIT_USER_URL } from "../../config/setting";
import { alertTypes } from "../types/alertType";

export const dangNhapAction = ({ taiKhoan, matKhau }) => {
	return (dispatch) => {
		axios({
			url: LOGIN_URL,
			method: "POST",
			data: { taiKhoan, matKhau },
		})
			.then((result) => {
				localStorage.setItem(userLogin, JSON.stringify(result.data));
				localStorage.setItem(accessToken, result.data.accessToken);

				dispatch({
					type: dang_nhap,
					nguoiDung: result.data,
				});
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Đăng nhập thành công!",
				});
			})
			.catch((error) => {
				dispatch({
					type: alertTypes.ERROR,
					message: error.response.data,
				});
			});
	};
};

export const dangXuatAction = () => {
	localStorage.removeItem(userLogin);
	localStorage.removeItem(accessToken);
	return { type: "USER LOGOUT" };
};

export const dangKyAction = (user) => {
	return (dispatch) => {
		axios({
			url: SIGNUP_URL,
			method: "POST",
			data: user,
		})
			.then((result) => {
				dispatch({
					type: dang_ky,
					userRegister: result.data,
				});
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Đăng kí thành công!",
				});
			})
			.catch((error) => {
				dispatch({
					type: alertTypes.ERROR,
					message: error.response.data,
				});
			});
	};
};

export const userDatVeAction = (objDatVe) => {
	let user = { accessToken };
	if (localStorage.getItem(userLogin)) {
		user = JSON.parse(localStorage.getItem(userLogin));
	}
	return (dispatch) => {
		axios({
			url: DAT_VE_URL,
			method: "POST",
			data: objDatVe,
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		})
			.then((res) => {
				dispatch({
					type: alertTypes.SUCCESS,
					message: res.data,
				});
			})
			.catch((err) => {
				// console.log(err.response.data);
			});
	};
};

export const userProfileAction = () => {
	let user = JSON.parse(localStorage.getItem(userLogin));
	return (dispatch) => {
		axios({
			url: PROFILE_URL,
			method: "POST",
			data: { taiKhoan: user.taiKhoan },
		})
			.then((result) => {
				// console.log(result.data);
				dispatch({
					type: profile_user,
					user: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
};
export const userChangeProfileAction = (newInfoUser) => {
	let user = JSON.parse(localStorage.getItem(userLogin));
	return (dispatch) => {
		axios({
			url: EDIT_USER_URL,
			method: "PUT",
			data: newInfoUser,
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		})
			.then((result) => {
				console.log(result.data);
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Thay đổi thành công!",
				});
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
};
