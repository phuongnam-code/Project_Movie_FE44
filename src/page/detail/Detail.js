import React, { useEffect, useState } from "react";
import moment from "moment";
import { StyledDetail, StyledDetailNavigation, StyledDetailMovieInfo, StyledDetailShowtimes } from "../../styles/StyledDetail";
import { NavLink } from "react-router-dom";
import NoImage from "../../component/images/no_image.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieAction } from "../../redux/actions/movieAction";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
// import "bootstrap/dist/css/bootstrap.min.css";

function Detail(props) {
	const detail = useSelector((state) => state.movieReducer.detailMovie);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDetailMovieAction(props.match.params.maPhim));
	}, []);

	const [modalShow, setModalShow] = useState(false);

	return (
		<StyledDetail>
			<StyledDetailNavigation>
				<div className="navigation-content">
					<NavLink to="/">
						<p>Home</p>
					</NavLink>
					<p>|</p>
					<p>{detail.tenPhim}</p>
				</div>
			</StyledDetailNavigation>
			<StyledDetailMovieInfo backdrop={detail.hinhAnh}>
				<div className="movieinfo-container">
					<div className="movieinfo-content">
						<div className="movieinfo-thumb">
							<img src={detail.hinhAnh ? `${detail.hinhAnh}` : NoImage} />
						</div>
						<div className="movieinfo-text">
							<h1>{detail.tenPhim}</h1>
							<h3>DESCRIPTION</h3>
							<p>{detail.moTa}</p>
							<div className="rating-date">
								<div>
									<h3>RATING</h3>
									<div className="score">{detail.danhGia}</div>
								</div>
								<div className="dateStart">
									<h3>DATE</h3>
									<p>{moment(detail.ngayKhoiChieu).format("MMMM Do YYYY")}</p>
								</div>
							</div>
							<button type="button" onClick={() => setModalShow(true)} className="btn">
								Trailer
							</button>
							<Modal size="lg" centered show={modalShow} onHide={() => setModalShow(false)}>
								<Modal.Body>
									<ReactPlayer url={detail.trailer} controls width="100%" />
								</Modal.Body>
							</Modal>
						</div>
					</div>
				</div>
			</StyledDetailMovieInfo>
			<StyledDetailShowtimes>
				<div className="showtimeContainer">
					<div className="weekdays">
						<div></div>
						<div className="week">
							<a>Sun</a>
							<a>Tue</a>
							<a>Wed</a>
							<a>Thu</a>
							<a>Fri</a>
							<a>Sat</a>
						</div>
					</div>
					<Tabs className="showtimesContent">
						<TabList className="logoCinema">
							{detail.heThongRapChieu?.map((rap) => (
								<Tab className="logoCinemaTab">
									<img src={rap.logo} alt={rap.maHeThongRap} />
								</Tab>
							))}
						</TabList>
						<>
							{detail.heThongRapChieu?.map((hethongRap) => (
								<TabPanel>
									{hethongRap.cumRapChieu?.map((cumRap) => (
										<div className="lichChieu">
											<div style={{ marginRight: "10px" }}>
												<img src={detail.hinhAnh} alt="" width="150px" />
											</div>
											<div>
												<h1>{cumRap.tenCumRap}</h1>
												{cumRap.lichChieuPhim?.slice(0, 1).map((lichChieu) => {
													return (
														<h2>
															{lichChieu.tenRap} - {lichChieu.thoiLuong}p
														</h2>
													);
												})}
												<h4>Xuất chiếu:</h4>
												<Row className="row_config">
													{cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu) => {
														return (
															<Col span={4} className="col_config">
																<NavLink to={`/bookingticket/${lichChieu.maLichChieu}`}>
																	{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
																</NavLink>
															</Col>
														);
													})}
												</Row>
											</div>
										</div>
									))}
								</TabPanel>
							))}
						</>
					</Tabs>
				</div>
			</StyledDetailShowtimes>
		</StyledDetail>
	);
}

export default Detail;
