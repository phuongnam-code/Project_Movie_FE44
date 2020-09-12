import React, { useState } from "react";
import { StyledCinemaContainer } from "../../styles/StyledCinemaList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

function CinemaList() {
	const dsHeThongRap = useSelector((state) => state.movieReducer.systemCinema);
	const dsCumRap = useSelector((state) => state.movieReducer.listCinemaCluster);

	return (
		<StyledCinemaContainer>
			<Tabs className="cinemaContentTabs" defaultIndex={1} onSelect>
				<TabList className="cinemaTabList">
					{dsHeThongRap?.map((htRap) => (
						<Tab className="cinemaTab">
							<img src={htRap.logo} alt="" />
						</Tab>
					))}
				</TabList>

				<div className="cinemaTabPanel_container">
					{dsCumRap?.map((rap) => (
						<TabPanel className="cinemaTabPanel">
							<Tabs className="cinemaTabPanel_tabs">
								<TabList className="cinemaTabPanel_tablist selectScroll">
									{rap.lstCumRap.map((lsCumRap) => {
										return (
											<Tab className="cinemaTabPanel_tab">
												<h3>{lsCumRap.tenCumRap}</h3>
												<p>{lsCumRap.diaChi}</p>
											</Tab>
										);
									})}
								</TabList>
								<div>
									{rap.lstCumRap.map((lsCumRap) => (
										<TabPanel className="cinemaTabPanel_tabpanel">
											{lsCumRap.danhSachPhim.map((phim) => (
												<NavLink to={`/detail/${phim.maPhim}`}>
													<div className="tabpanelContent">
														<div className="imgTapanel">
															<img src={phim.hinhAnh} alt="" />
														</div>
														<div className="titleTapanel">
															<h2>{phim.tenPhim}</h2>
															<>
																{phim.lstLichChieuTheoPhim.slice(0, 1).map((item) => (
																	<p>
																		<p>{item.tenRap}</p>
																		<p>Khởi chiếu: {moment(item.ngayChieuGioChieu).format("MMM Do YY")}</p>
																	</p>
																))}
															</>
														</div>
													</div>
												</NavLink>
											))}
										</TabPanel>
									))}
								</div>
							</Tabs>
						</TabPanel>
					))}
				</div>
			</Tabs>
		</StyledCinemaContainer>
	);
}

export default CinemaList;
