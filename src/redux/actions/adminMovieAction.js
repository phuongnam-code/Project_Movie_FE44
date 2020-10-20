import axios from "axios";
import {
	ADD_MOVIE_URL,
	CREATE_SHOWTIMES_URL,
	DEL_MOVIE_URL,
	EDIT_MOVIE_URL,
	MOVIE_API_URL,
	SEARCH_BASE_URL,
	SEARCH_MOVIE_NUM_URL,
	userLogin,
} from "../../config/setting";
import { find_movie, get_movie_list } from "../types/adminType";
import { alertTypes } from "../types/alertType";

export const getMovieListAction = () => {
	return (dispatch) => {
		axios({
			url: MOVIE_API_URL,
			method: "GET",
		})
			.then((res) => {
				// console.log(res.data);
				dispatch({
					type: get_movie_list,
					dsPhim: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
};

export const searchMovieWithNumberAction = (keyword) => {
	keyword = parseInt(keyword);
	return (dispatch) => {
		axios({
			url: `${SEARCH_MOVIE_NUM_URL}${keyword}`,
			method: "GET",
		})
			.then((res) => {
				console.log(res);
				dispatch({
					type: find_movie,
					searchResult: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
};
export const searchMovieWithNameAction = (keyword) => {
	return (dispatch) => {
		axios({
			url: `${SEARCH_BASE_URL}${keyword}`,
			method: "GET",
		})
			.then((res) => {
				console.log(res.data);
				dispatch({
					type: find_movie,
					searchResult: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
};
export const addMovieAction = (movie) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	return (dispatch) => {
		axios({
			url: ADD_MOVIE_URL,
			method: "POST",
			data: movie,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Thêm phim thành công",
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};

export const delMovieAction = (maPhim) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	console.log(maPhim);
	return (dispatch) => {
		axios({
			url: ` ${DEL_MOVIE_URL}${maPhim}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};
export const editMovieAction = (movie) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	console.log(movie);
	return (dispatch) => {
		axios({
			url: EDIT_MOVIE_URL,
			method: "POST",
			data: movie,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Sửa thông tin thành công!!",
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};

export const addShowtimeAction = (movieInfo) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	console.log(movieInfo);
	return (dispatch) => {
		axios({
			url: CREATE_SHOWTIMES_URL,
			method: "POST",
			data: movieInfo,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};

export const uploadMovieAction = (movie) => {
	let userLocal = JSON.parse(localStorage.getItem(userLogin));
	console.log(movie);
	return (dispatch) => {
		axios({
			url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
			method: "POST",
			data: movie,
			headers: {
				Authorization: `Bearer ${userLocal.accessToken}`,
			},
		})
			.then((res) => {
				console.log(res);
				dispatch({
					type: alertTypes.SUCCESS,
					message: "Sửa thông tin thành công!!",
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
};
