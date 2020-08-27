export const userLogin = "userLogin";
export const accessToken = "accessToken";

export const groupID = "GP14"; //mã nhóm phim
export const domain = "http://movie0706.cybersoft.edu.vn"; //server

export const IMAGE_BASE_URL = "http://movie0706.cybersoft.edu.vn/hinhanh/";
export const POSTER_SIZE = "w500";

// http://movie0706.cybersoft.edu.vn + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + {MaNhom} + &tenPhim= + {tenPhim}
//              domain               + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + groupID  + &tenPhim= + searchKeyWord
export const SEARCH_BASE_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}&tenPhim=`; //tìm kiếm

// http://movie0706.cybersoft.edu.vn + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + {maNhom}
//              domain               + /api/QuanLyPhim/LayDanhSachPhim?maNhom= + groupID
export const MOVIE_API_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`;
