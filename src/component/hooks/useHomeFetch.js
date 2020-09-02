import { useState, useEffect } from "react";
import { listMovieService } from "../../services/MoviesService";
import { MOVIE_API_URL, CINEMA_SYSTEM_URL, INFO_CINEMA_CLUSTER_URL, ABC_URL, domain, groupID } from "../../config/setting";
import axios from "axios";

export default function useHomeFetch(searchTerm) {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);

	const fetchMovie = async (url) => {
		setError(false);
		try {
			const response = await axios.get(url);

			const result = response.data;
			setMovies(result);
		} catch (error) {
			setError(true);
			console.error(error);
		}
	};

	// useEffect(() => {
	// 	// if (sessionStorage.homeState) {
	// 	// 	setState(JSON.parse(sessionStorage.homeState));
	// 	// } else {
	// 	// 	fetchMovie(MOVIE_API_URL);
	// 	// }
	// 	fetchMovie(MOVIE_API_URL);
	// }, []);

	useEffect(() => {
		if (!searchTerm) {
			// sessionStorage.setItem("homeState", JSON.stringify(state));
			fetchMovie(MOVIE_API_URL);
		}
	}, [searchTerm, movies]);

	//=====================================================================================================

	const [cinemaList, setCinemaList] = useState([]);

	const fetchCinemaList = async (url) => {
		try {
			const response = await axios.get(url);

			const result = response.data;
			setCinemaList(result);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchCinemaList(CINEMA_SYSTEM_URL);
	}, []);

	//==================================================================================================
	// const [showtimesInfo, setShowtimesInfo] = useState([]);

	// const fetchShowtimesInfo = async (url) => {
	// 	try {
	// 		const response = await axios.get(url);
	// 		console.log(response.data);
	// 		setShowtimesInfo(response.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchShowtimesInfo(ABC_URL);
	// }, []);

	return [{ movies, error, cinemaList }, fetchMovie, fetchCinemaList];
}
