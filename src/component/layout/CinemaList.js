import React, { useState, useEffect, useRef } from "react";
import useHomeFetch from "../hooks/useHomeFetch";
import { StyledCinemaContainer } from "./../styles/StyledCinemaList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { domain, groupID } from "../../config/setting";
import axios from "axios";

let count = 0;
function CinemaList() {
	const [{ cinemaList }] = useHomeFetch();
	const [cinemaCluster, setCinemaCluster] = useState([]);
	const [query, setQuery] = useState("BHDStar");

	const handleClick = (maHeThongRap) => {
		setQuery(maHeThongRap);
	};

	let result,
		lstCumRap,
		dsCumRap = [],
		dsPhim = [];

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(`${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${query}&maNhom=${groupID}`);
			count += 1;
			console.log(" %c hi, log lần thứ: ", "color: white; background-color: #2274A5", count);
			console.log("query: ", query);
			console.log("response: ", response);

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
			setCinemaCluster(dsCumRap);

			console.log("result: ", result);
			console.log("lstCumRap: ", lstCumRap);
			console.log("dsCumRap: ", dsCumRap);
			console.log("dsPhim: ", dsPhim);

			// console.log("cinemaCluster: ", cinemaCluster);
		};

		fetchData();
	}, [query]);
	return (
		<StyledCinemaContainer>
			<Tabs className="cinemaContentTabs">
				<TabList className="cinemaTabList">
					{cinemaList?.map((cinema, index) => {
						return (
							<Tab
								key={`${index}-${cinema.maHeThongRap}`}
								className="cinemaTab"
								value={cinema.maHeThongRap}
								onClick={() => handleClick(cinema.maHeThongRap)}
							>
								<img src={cinema.logo} alt={cinema.maHeThongRap} />
							</Tab>
						);
					})}
				</TabList>

				<TabPanel className="cinemaTabPanel">
					<Tabs className="cinemaTabPanelContent">
						<TabList>
							{cinemaCluster?.map((cluster) => (
								<Tab>{cluster}</Tab>
							))}
						</TabList>
						<>
							<TabPanel>
								<h2>phim.tenPhim</h2>
							</TabPanel>
							{/* {dsPhim?.map((phim) => (
								<TabPanel>
									<h2>{phim.tenPhim}</h2>
								</TabPanel>
							))} */}
						</>
					</Tabs>
				</TabPanel>
			</Tabs>
		</StyledCinemaContainer>
	);
}

export default CinemaList;
