import { useState, useEffect } from "react";
import { listMovieService } from "../../services/MoviesService";
import { MOVIE_API_URL } from "../../config/setting";
import axios from "axios";

export default function useHomeFetch(searchTerm) {
	const [state, setState] = useState([]);

	const fetchMovie = async (url) => {
		try {
			const response = await axios.get(url);
			console.log("%c response", "color: white; background-color: #2274A5", response);

			const result = response.data;
			setState(result);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (sessionStorage.homeState) {
			setState(JSON.parse(sessionStorage.homeState));
		} else {
			fetchMovie(MOVIE_API_URL);
		}
	}, []);

	useEffect(() => {
		if (!searchTerm) {
			sessionStorage.setItem("homeState", JSON.stringify(state));
		}
	}, [searchTerm, state]);

	return [state, fetchMovie];
}
