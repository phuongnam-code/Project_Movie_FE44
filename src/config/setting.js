export const userLogin = "userLogin";
export const accessToken = "accessToken";

export const systemCode = "cgv";
export const groupID2 = "GP15";
export const groupID = "GP14"; //mã nhóm phim
export const domain = "http://movie0706.cybersoft.edu.vn"; //server

//API (1) => lấy danh sách phim, tìm kiếm
export const MOVIE_API_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`;
export const SEARCH_BASE_URL = `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}&tenPhim=`;

//API (2) lấy danh sách hệ thống rạp
export const CINEMA_SYSTEM_URL = `${domain}/api/QuanLyRap/LayThongTinHeThongRap`;

//API (3)
export const INFO_CINEMA_CLUSTER_ALL_URL = `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID2}`;
export const INFO_CINEMA_CLUSTER_URL = `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${systemCode}&maNhom=${groupID}`;

//API (4) chi tiết phim
export const DETAIL_FILM_URL = `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=`;

//API (5) lấy chi tiết phòng vé
export const INFO_BOOKING_TICKET_URL = `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=`;

//API (6,7) đăng kí, đăng nhập
export const SIGNUP_URL = `${domain}/api/QuanLyNguoiDung/DangKy`;
export const LOGIN_URL = `${domain}/api/QuanLyNguoiDung/DangNhap`;

//API (8) Thông tin cá nhân, xem lịch sử đặt vé
//http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan

//API (9) Thay đổi thông tin cá nhân
//http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung
