import axios from "axios";
import {
	MOVIE_API_URL,
	SEARCH_BASE_URL,
	CINEMA_SYSTEM_URL,
	INFO_CINEMA_CLUSTER_ALL_URL,
	DETAIL_FILM_URL,
	INFO_BOOKING_TICKET_URL,
} from "../../config/setting";
import { get_movie_list, search_movie, get_system_cinema, get_cinema_cluster, get_detail_movie, get_info_booking_ticket } from "../types/movieType";
// action lấy danh sách phim
export const getMovieListAction = () => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: MOVIE_API_URL,
		})
			.then((result) => {
				dispatch({
					type: get_movie_list,
					dsPhim: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
// action search phim theo tên
export const searchMovieAction = (maPhim) => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: `${SEARCH_BASE_URL}${maPhim}`,
		})
			.then((result) => {
				dispatch({
					type: search_movie,
					dsPhim: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
// action lấy danh sách các hệ thống rạp (CGV, BHB, Galaxy ...)
export const getSystemCinemaAction = () => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: CINEMA_SYSTEM_URL,
		})
			.then((result) => {
				dispatch({
					type: get_system_cinema,
					dsHeThongRap: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
// action lấy chi tiết cụm rạp
export const getCinemaClusterAction = () => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: INFO_CINEMA_CLUSTER_ALL_URL,
		})
			.then((result) => {
				dispatch({
					type: get_cinema_cluster,
					dsCumRap: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
// action lấy chi tiết phim theo mã phim
export const getDetailMovieAction = (maPhim) => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: `${DETAIL_FILM_URL}${maPhim}`,
		})
			.then((result) => {
				dispatch({
					type: get_detail_movie,
					chiTietPhim: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
// action lấy chi tiết phòng vé từ page Detail chọn xuất chiếu
export const getInfoBookingTicketAction = (maLichChieu) => {
	return (dispatch) => {
		axios({
			method: "GET",
			url: `${INFO_BOOKING_TICKET_URL}${maLichChieu}`,
		})
			.then((result) => {
				dispatch({
					type: get_info_booking_ticket,
					chiTietPhongVe: result.data,
				});
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};
};
