import { get_movie_list, search_movie, get_system_cinema, get_cinema_cluster, get_detail_movie } from "../types/movieType";

const initialState = {
	movieList: [],
	systemCinema: [],
	listCinemaCluster: [],
	detailMovie: {},
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case get_movie_list: {
			state.movieList = action.dsPhim;
			return { ...state };
		}
		case search_movie: {
			state.movieList = action.dsPhim;
			return { ...state };
		}
		case get_system_cinema: {
			state.systemCinema = action.dsHeThongRap;
			return { ...state };
		}
		case get_cinema_cluster: {
			state.listCinemaCluster = action.dsCumRap;
			return { ...state };
		}
		case get_detail_movie: {
			state.detailMovie = action.chiTietPhim;
			return { ...state };
		}
		default:
			return state;
	}
};

export default movieReducer;
