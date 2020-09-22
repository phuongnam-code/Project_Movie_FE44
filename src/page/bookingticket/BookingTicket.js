import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoBookingTicketAction, getSystemCinemaAction } from "../../redux/actions/movieAction";
import { StyledBookingTicketContainer } from "../../styles/StyledBookingTicket";
import screen from "../../component/images/screen.png";
import WeekendIcon from "@material-ui/icons/Weekend";
import CountDownTimer from "./CountDownTimer";
import { userDatVeAction } from "../../redux/actions/userAction";
import { Redirect } from "react-router-dom";

function BookingTicket(props) {
	let [dsGheDangDat, setDsGheDangDat] = useState([]);
	const dispatch = useDispatch();

	const infoBookingTicket = useSelector((state) => state.movieReducer.info_bookingticket);
	const listSystemCinema = useSelector((state) => state.movieReducer.systemCinema);
	const nguoiDung = useSelector((state) => state.userReducer.nguoiDung);
	const message = useSelector((state) => state.alertReducer.message);

	useEffect(() => {
		dispatch(getSystemCinemaAction());
		dispatch(getInfoBookingTicketAction(props.match.params.maLichChieu));
	}, []);

	const dsRap = [];
	listSystemCinema.map((rap) => {
		let ten = rap.tenHeThongRap.slice(0, 1);
		let logo = rap.logo;
		dsRap.push({
			ten: ten,
			logo: logo,
		});
	});

	let tenRap = infoBookingTicket.thongTinPhim?.tenCumRap.slice(0, 1);
	let index = dsRap.findIndex((item) => item.ten === tenRap);
	let logo = dsRap[index]?.logo;

	if (!nguoiDung.taiKhoan) {
		alert("Bạn chưa đăng nhập");
		return <Redirect to="/login" />;
	}

	const datGhe = (ghe) => {
		let indexGhe = dsGheDangDat.findIndex((gheDD) => gheDD.stt === ghe.stt);
		//Kiểm tra ghế được click có trong mảng thì remove ra, chưa có thì push vào
		if (indexGhe !== -1) {
			dsGheDangDat.splice(indexGhe);
		} else {
			dsGheDangDat.push(ghe);
		}
		let dsGheDangDatUpdate = [...dsGheDangDat];
		setDsGheDangDat(dsGheDangDatUpdate);
	};

	const datVe = () => {
		let objDatVe = {
			maLichChieu: props.match.params.maLichChieu,
			danhSachVe: dsGheDangDat,
			taiKhoanNguoiDung: nguoiDung.taiKhoan,
		};
		if (dsGheDangDat.length !== 0) {
			console.log(dsGheDangDat);
			dispatch(userDatVeAction(objDatVe));
		} else {
			alert("Bạn chưa chọn ghế??");
		}
	};

	if (message === "Đặt vé thành công!") {
		alert("Đặt vé thành công!");
	}

	return (
		<StyledBookingTicketContainer>
			<div className="chooseChair">
				<div className="divLogo">
					<div className="logo">
						<img src={logo} alt="logo" />
						<div>
							<h3>{infoBookingTicket.thongTinPhim?.tenCumRap}</h3>
							<p>{infoBookingTicket.thongTinPhim?.diaChi}</p>
						</div>
					</div>
					<div className="chairHoldTime">
						<small>Thời gian giữ ghế</small>
						<h1>
							<CountDownTimer seconds={300} />
						</h1>
					</div>
				</div>
				<div className="divChair">
					<div className="screen">
						<img src={screen} alt="screen" />
					</div>
					<div className="listChair">
						{
							// load danh sách ghế
							infoBookingTicket.danhSachGhe?.map((ghe, index) => {
								let classLoaiGhe = ghe.loaiGhe === "Vip" ? "gheVip" : "";
								//Nếu ghế được người khác đặt thì render ra button đỏ
								if (ghe.daDat) {
									return (
										<>
											<WeekendIcon disabled className={`ghe gheDaDat `} />
											{(index + 1) % 16 === 0 ? <br /> : ""}
										</>
									);
								}

								//Xét xem ghế đang duyệt có trong mảng ghế đang đặt không ?
								let indexGheDD = dsGheDangDat.findIndex((gheDangDat) => gheDangDat.stt === ghe.stt);
								let classGheDangDat = indexGheDD !== -1 ? "gheDangDat" : "";

								//Nếu ghế chưa đặt thì render ra ghe thường
								return (
									<>
										<WeekendIcon onClick={() => datGhe(ghe)} className={` ghe ${classLoaiGhe} ${classGheDangDat} `} />
										{(index + 1) % 16 === 0 ? <br /> : ""}
									</>
								);
							})
						}
					</div>
				</div>
				<div className="divChairType">
					<div className="chair">
						<WeekendIcon />
						<p>Ghế thường</p>
					</div>
					<div className="chair">
						<WeekendIcon className="gheDangDat" />
						<p>Ghế đang đặt</p>
					</div>
					<div className="chair">
						<WeekendIcon className="gheVip" />
						<p>Ghế Vip</p>
					</div>
					<div className="chair">
						<WeekendIcon className="gheDaDat" />
						<p>Ghế đã đặt</p>
					</div>
				</div>
			</div>
			<div className="pay">
				<div className="giaTien rightCheckout">
					<h1>
						{dsGheDangDat
							.reduce((tongTien, ghe) => {
								return (tongTien += ghe.giaVe);
							}, 0)
							.toLocaleString()}{" "}
						đ
					</h1>
				</div>
				<div className="thongTinPhim rightCheckout">
					<h3>
						Phim: <span className="colorXuatChieu">{infoBookingTicket.thongTinPhim?.tenPhim}</span>
					</h3>
					<p>
						Xuất chiếu: <br />
						<span className="colorXuatChieu">{infoBookingTicket.thongTinPhim?.ngayChieu}</span>
						<span className="space colorXuatChieu">{infoBookingTicket.thongTinPhim?.tenRap}</span>
						<span className="colorXuatChieu">{infoBookingTicket.thongTinPhim?.gioChieu}</span>
					</p>
				</div>
				<div className="rightCheckout">
					<p>
						Ghế:{" "}
						{dsGheDangDat.map((ghe) => (
							<span style={{ marginRight: "5px" }}>{ghe.stt}</span>
						))}
					</p>
				</div>
				<div className="rightCheckout email">
					<input type="text" placeholder="Email" />
				</div>
				<div className="rightCheckout phone">
					<input type="text" placeholder="Số điện thoại" />
				</div>
				<div className="rightCheckout maGiamGia">
					<input type="text" placeholder="Mã giảm giá" disabled />
					<button className="btnGiamGia" disabled>
						Apply
					</button>
				</div>
				<div className="datVe">
					<button className="btnDatVe" type="submit" onClick={() => datVe()}>
						Đặt vé
					</button>
				</div>
			</div>
		</StyledBookingTicketContainer>
	);
}

export default BookingTicket;
