import React, { useState, useEffect, useRef } from "react";
import useHomeFetch from "../hooks/useHomeFetch";
import { StyledCinemaContainer } from "../../styles/StyledCinemaList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { domain, groupID } from "../../config/setting";
import axios from "axios";
import moment from "moment";

let count = 0;
function CinemaList() {
	const [{ cinemaList }] = useHomeFetch();
	const [query, setQuery] = useState("BHDStar");
	const [url, setUrl] = useState(`${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=${groupID}`);
	const [isLoading, setIsLoading] = useState(false);

	const [lsPhim, setLsPhim] = useState([]);
	const [lsCumRap, setLsCumRap] = useState([]);

	useEffect(() => {
		setUrl(`${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${query}&maNhom=${groupID}`);
	}, [query]);

	useEffect(() => {
		let result,
			lstCumRap,
			dsCumRap = [],
			dsPhim = [];

		// count += 1;
		// console.log(" %c hi, log lần thứ: ", "color: white; background-color: #2274A5", count);

		// console.log(url);
		const fetchData = async () => {
			// console.log(dsPhim);
			setIsLoading(true);
			const response = await axios(url);

			// console.log("response: ", response);

			response.data.map((index) => {
				result = index;
				lstCumRap = index.lstCumRap;

				index.lstCumRap.map((rap) => dsCumRap.push({ tenCumRap: rap.tenCumRap, diaChi: rap.diaChi }));

				index.lstCumRap.map((index) =>
					index.danhSachPhim.map((index) => {
						let ngayChieuGioChieu, tenRap;
						index.lstLichChieuTheoPhim.map((phimItem) => {
							ngayChieuGioChieu = phimItem.ngayChieuGioChieu;
							tenRap = phimItem.tenRap;
						});
						return dsPhim.push({
							tenPhim: index.tenPhim,
							hinhAnh: index.hinhAnh,
							ngayChieuGioChieu: ngayChieuGioChieu,
							tenRap: tenRap,
						});
					})
				);
			});

			// console.log("result: ", result);
			// console.log("lstCumRap: ", lstCumRap);
			// console.log("dsCumRap: ", dsCumRap);
			// console.log("dsPhim: ", dsPhim);

			setLsCumRap(dsCumRap);
			setLsPhim(dsPhim);

			// console.log("lsCumRap: ", lsCumRap);
			// console.log("lsPhim: ", lsPhim);

			setIsLoading(false);
		};

		fetchData();
	}, [url]);

	return (
		<StyledCinemaContainer>
			<Tabs className="cinemaContentTabs" defaultIndex={0} onSelect={(index) => console.log(index)}>
				<TabList className="cinemaTabList">
					{cinemaList?.map((cinema, index) => {
						return (
							<Tab
								key={`${index}-${cinema.maHeThongRap}`}
								className="cinemaTab"
								value={cinema.maHeThongRap}
								onClick={() =>
									// setUrl(
									// 	`${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinema.maHeThongRap}&maNhom=${groupID}`
									// )
									setQuery(`${cinema.maHeThongRap}`)
								}
							>
								<img src={cinema.logo} alt={cinema.maHeThongRap} />
							</Tab>
						);
					})}
				</TabList>

				{isLoading ? (
					<div>Loading ...</div>
				) : (
					// <>
					// 	{cinemaList.map(() => (
					<TabPanel className="cinemaTabPanel">
						<Tabs className="cinemaTabPanelContent">
							<TabList>
								{isLoading ? (
									<div>Loading ...</div>
								) : (
									<>
										{lsCumRap.map((rap, index) => (
											<Tab key={`${index}-${rap.tenCumRap}`}>
												<h3>{rap.tenCumRap}</h3>
												<small>{rap.diaChi}</small>
											</Tab>
										))}
									</>
								)}
							</TabList>
							<>
								{lsPhim.map((phim, index) => (
									<TabPanel key={`${index}-${phim.tenPhim}`}>
										<img src={phim.hinhAnh} alt={phim.tenPhim} width="40%" />
										<span>{phim.tenPhim}</span>
										<span>{phim.tenRap}</span>
										<button>{moment(phim.ngayChieuGioChieu).format("hh:mm A")}</button>
									</TabPanel>
								))}
							</>
						</Tabs>
					</TabPanel>
					// 	))}
					// </>
				)}
			</Tabs>
		</StyledCinemaContainer>
	);
}

export default CinemaList;
