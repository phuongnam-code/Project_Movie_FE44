import React, { useState, useEffect } from "react";
import { DETAIL_FILM_URL } from "../../config/setting";
import axios from "axios";
import moment from "moment";
import { StyledDetail, StyledDetailNavigation, StyledDetailMovieInfo, StyledDetailShowtimes } from "../../styles/StyledDetail";
import { NavLink } from "react-router-dom";
import { Link } from "@reach/router";
import NoImage from "../../component/images/no_image.jpg";

function Detail(props) {
	const [detail, setDetail] = useState({});
	let detailCluster = [];
	useEffect(async () => {
		const response = await axios(`${DETAIL_FILM_URL}${props.match.params.maPhim}`);
		// console.log(response.data);

		response.data.heThongRapChieu.map((item) => {
			let tenCumRap;
			item.cumRapChieu.map((index) => {
				console.log(index);
				tenCumRap = index.tenCumRap;
			});
			return detailCluster.push({
				tenCumRap: tenCumRap,
			});
		});
		// console.log(detailCluster);
		setDetail(response.data);
	}, []);

	return (
		<StyledDetail>
			<StyledDetailNavigation>
				<div className="navigation-content">
					<Link to="/">
						<p>Home</p>
					</Link>
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
							<button className="btn">Trailer</button>
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
					<div className="showtimesContent">
						<div className="logoCinema">
							{detail.heThongRapChieu?.map((rap) => (
								<img src={rap.logo} alt={rap.maHeThongRap} />
							))}
						</div>
						<div></div>
					</div>
				</div>
			</StyledDetailShowtimes>
		</StyledDetail>
	);
}

export default Detail;
