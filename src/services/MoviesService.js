import { domain, groupID } from "../config/setting";
import axios from "axios";

class MoviesService {
	// lấy danh sách phim
	getListMovie = () => {
		return axios({
			url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
			method: "get",
		});
	};

	//lấy thông tin hệ thống rạp
	getCinemaSystem = () => {
		return axios({
			url: `${domain}/api/QuanLyRap/LayThongTinHeThongRap`,
			method: "get",
		});
	};

	// lấy thông tin chi tiết phim
	getInfoOnCinemaSystemShowtimes = (movieCode) => {
		return axios({
			url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${movieCode}&maNhom=${groupID}`,
			method: "get",
		});
	};

	// lấy thông tin phòng vé
	getInfoTicketRoom = (showthimesCode) => {
		return axios({
			url: `${domain}/api/quanlydatve/laydanhsachphongve?malichchieu=${showthimesCode}`,
			method: "get",
		});
	};
}
export const listMovieService = new MoviesService();
