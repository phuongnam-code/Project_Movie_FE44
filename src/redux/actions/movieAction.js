import axios from "axios";
import { MOVIE_API_URL, SEARCH_BASE_URL, CINEMA_SYSTEM_URL, INFO_CINEMA_CLUSTER_ALL_URL, DETAIL_FILM_URL } from "../../config/setting";
import { get_movie_list, search_movie, get_system_cinema, get_cinema_cluster, get_detail_movie } from "../types/movieType";

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
