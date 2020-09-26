import axios from "axios";
import { ADD_USER_URL, DEL_USER_URL, EDIT_USER_URL, GET_USER_LIST_URL, SEARCH_USER_URL, userLogin } from "../../config/setting";
import { add_user, find_user, get_user_list } from "../types/adminType";
import { alertTypes } from "../types/alertType";

export const getUserListAction = () => {
	return (dispatch) => {
		axios({
			url: GET_USER_LIST_URL,
			method: "GET",
		})
			.then((res) => {
				// console.log(res.data);
				dispatch({
					type: get_user_list,
					dsNguoiDung: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
};

export const addUserAction = (user) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	return (dispatch) => {
		axios({
			url: ADD_USER_URL,
			method: "POST",
			data: user,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res.data);
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Thêm người dùng thành công!!",
				});
			})
			.catch((err) => {
				console.log(err.response.data);
				dispatch({
					type: alertTypes.ERROR,
					message: err.response.data,
				});
			});
	};
};

export const editUserAction = (user) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	return (dispatch) => {
		axios({
			url: EDIT_USER_URL,
			method: "PUT",
			data: user,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};
export const delUserAction = (TaiKhoan) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	console.log(TaiKhoan);
	return (dispatch) => {
		axios({
			url: DEL_USER_URL,
			method: "DELETE",
			data: TaiKhoan,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};
};
export const findUserAction = (keyword) => {
	return (dispatch) => {
		axios({
			url: `${SEARCH_USER_URL}${keyword}`,
			method: "GET",
		})
			.then((res) => {
				// console.log(res.data);
				dispatch({
					type: find_user,
					searchResult: res.data,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};
