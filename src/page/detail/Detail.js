import React, { useEffect } from "react";
import moment from "moment";
import { StyledDetail, StyledDetailNavigation, StyledDetailMovieInfo, StyledDetailShowtimes } from "../../styles/StyledDetail";
import { NavLink } from "react-router-dom";
import NoImage from "../../component/images/no_image.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieAction } from "../../redux/actions/movieAction";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Detail(props) {
	const detail = useSelector((state) => state.movieReducer.detailMovie);
	const dispatch = useDispatch();
	useEffect(async () => {
		dispatch(getDetailMovieAction(props.match.params.maPhim));
	}, []);

	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<video width="320" height="240" controls="controls">
				<source src={detail.trailer} />
			</video>
		</div>
	);

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
							<button type="button" onClick={handleOpen} className="btn">
								Trailer
							</button>
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
			<Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
				{body}
			</Modal>
		</StyledDetail>
	);
}

export default Detail;
