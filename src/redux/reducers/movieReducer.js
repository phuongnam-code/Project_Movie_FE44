import {
	get_movie_list,
	search_movie,
	get_system_cinema,
	get_cinema_cluster,
	get_detail_movie,
	get_info_booking_ticket,
	get_page_movie_list,
} from "../types/movieType";

const initialState = {
	movieList: [],
	pageMovieList: [],
	systemCinema: [],
	listCinemaCluster: [],
	detailMovie: {},
	info_bookingticket: {},
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		// lấy danh sách phim
		case get_movie_list: {
			state.movieList = action.dsPhim;
			return { ...state };
		}
		case get_page_movie_list: {
			state.pageMovieList = action.dsPhim;
			return { ...state };
		}
		//search phim theo tên
		case search_movie: {
			state.movieList = action.dsPhim;
			return { ...state };
		}
		// lấy thông tin hệ thống rạp
		case get_system_cinema: {
			state.systemCinema = action.dsHeThongRap;
			return { ...state };
		}
		// lấy thông tin cụm rạp
		case get_cinema_cluster: {
			state.listCinemaCluster = action.dsCumRap;
			return { ...state };
		}
		//lấy chi tiết phim theo mã
		case get_detail_movie: {
			state.detailMovie = action.chiTietPhim;
			return { ...state };
		}
		//lấy thông tin phòng vé theo mã lịch chiếu
		case get_info_booking_ticket: {
			state.info_bookingticket = action.chiTietPhongVe;
			return { ...state };
		}
		default:
			return state;
	}
};

export default movieReducer;
