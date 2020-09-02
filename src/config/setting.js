export const userLogin = "userLogin";
export const accessToken = "accessToken";

export const systemCode = "cgv";
export const groupID = "GP14"; //mã nhóm phim
export const domain = "http://movie0706.cybersoft.edu.vn"; //server

// http://movie0706.cybersoft.edu.vn + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + {MaNhom} + &tenPhim= + {tenPhim}
//              domain               + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + groupID  + &tenPhim= + searchKeyWord
export const SEARCH_BASE_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}&tenPhim=`; //tìm kiếm

// http://movie0706.cybersoft.edu.vn + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + {maNhom}
//              domain               + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + groupID
export const MOVIE_API_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`;

// http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap
export const CINEMA_SYSTEM_URL = `${domain}/api/QuanLyRap/LayThongTinHeThongRap`;

// http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom={MaNhom}
export const INFO_CINEMA_CLUSTER_URL = `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`;

// http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap={maHeThongRap}&maNhom={MaNhom}
export const ABC_URL = `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${systemCode}&maNhom=${groupID}`;
