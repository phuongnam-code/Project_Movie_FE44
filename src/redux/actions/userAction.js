import axios from "axios";
import { dang_nhap, dang_xuat, dang_ky } from "../types/userType";
import { userLogin, accessToken, LOGIN_URL, SIGNUP_URL } from "../../config/setting";
import { alertTypes } from "../types/alertType";
import { history } from "../../config/history";

export const dangNhapAction = ({ taiKhoan, matKhau }) => {
	return (dispatch) => {
		axios({
			url: LOGIN_URL,
			method: "POST",
			data: { taiKhoan, matKhau },
		})
			.then((result) => {
				// console.log(result.data);
				//Lưu thông tin đăng nhập vào local storage
				localStorage.setItem(userLogin, JSON.stringify(result.data));
				//Lưu thông tin token vào localStorage
				localStorage.setItem(accessToken, result.data.accessToken);
				dispatch({
					type: dang_nhap,
					nguoiDung: result.data,
				});
			})
			.catch((error) => {
				// console.log(error.response.data);
				dispatch({
					type: alertTypes.ERROR,
					message: error.response.data,
				});
			});
	};
};

export const dangXuatAction = () => {
	// localStorage.removeItem(userLogin);
	// return dispatch({ type: dang_xuat });
};

export const dangKyAction = (user) => {
	console.log(user);
	return (dispatch) => {
		axios({
			url: SIGNUP_URL,
			method: "POST",
			data: user,
		})
			.then((result) => {
				console.log(result.data);
				dispatch({
					type: dang_ky,
					userRegister: result.data,
				});
			})
			.catch((error) => {
				console.log(error);
				// dispatch({
				// 	type: alertTypes.ERROR,
				// 	message: error.response.,
				// });
			});
	};
};
