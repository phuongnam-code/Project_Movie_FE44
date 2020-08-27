import { domain, groupID, MOVIE_API_URL } from "../config/setting";
import axios from "axios";

export class MoviesService {
	getListMovie = () => {
		console.log(axios.get(MOVIE_API_URL));
		return axios({
			url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
			method: "get",
		});
	};
	getInfoMovie = (movieCode) => {
		return axios({
			url: `${domain}/api/quanlyrap/laythongtinlichchieuphim?maphim=${movieCode}`,
			method: "get",
		});
	};
	getInfoTicketRoom = (showthimesCode) => {
		return axios({
			url: `${domain}/api/quanlydatve/laydanhsachphongve?malichchieu=${showthimesCode}`,
			method: "get",
		});
	};
}
export const listMovieService = new MoviesService();
