import axios from "axios";
import { MOVIE_API_URL, SEARCH_BASE_URL } from "../../config/setting";
import { find_movie, get_movie_list } from "../types/adminType";

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

export const searchMovieAction = (keyword) => {
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
