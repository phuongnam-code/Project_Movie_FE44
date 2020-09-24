import axios from "axios";
import { MOVIE_API_URL } from "../../config/setting";
import { get_movie_list } from "../types/adminType";

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
