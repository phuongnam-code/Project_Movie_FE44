import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import DrawerPhim from "./DrawerPhim";
import DrawerNguoiDung from "./DrawerNguoiDung";
import TableNguoiDung from "./TableNguoiDung";
import TablePhim from "./TablePhim";
import DrawerLichChieu from "./DrawerLichChieu";
import { useDispatch } from "react-redux";
import { findUserAction, getUserListAction } from "../../redux/actions/adminUserAction";

const titleDraw = (title = true) => (
	<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
		<p>{title}</p>
	</div>
);

function Content() {
	const [stateDrawer, setStateDrawer] = useState(false);
	const [drawerLichChieu, setDrawerLichChieu] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState("");
	const timeOut = useRef(null);

	const showDrawer = () => {
		setStateDrawer(true);
	};
	const htLichChieu = () => {
		setDrawerLichChieu(true);
	};

	const onClose = () => {
		setStateDrawer(false);
		setDrawerLichChieu(false);
	};

	const handleChange = (event) => {
		const { value } = event.target;

		clearTimeout(timeOut.current);
		setSearchTerm(value);
		timeOut.current = setTimeout(() => {
			if (value === "") {
				dispatch(getUserListAction());
			}
			dispatch(findUserAction(value.trim()));
		}, 500);
	};

	return (
		<Tabs className="contentAdmin">
			<TabList className="contentAdmin_left">
				<h1 className="titleAdmin">ADMIN</h1>
				<Tab>Quản lý phim</Tab>
				<Tab>Quản lý người dùng</Tab>
			</TabList>
			<div className="contentAdmin_right">
				<TabPanel>
					<div className="addMovie">
						<Button type="primary" onClick={showDrawer}>
							<PlusOutlined /> Thêm phim
						</Button>
						<DrawerPhim onClose={onClose} stateDrawer={stateDrawer} titleDraw={titleDraw} isEdit={isEdit} />
					</div>
					<div className="searchMovie">
						<input className="inputSearch" placeholder="Nhập vào tên phim hoặc mã phim" value={searchTerm} onChange={handleChange} />
						<SearchOutlined className="iconSearch" />
					</div>
					<div className="tableMovie">
						<TablePhim htLichChieu={htLichChieu} />
						<DrawerLichChieu onClose={onClose} drawerLichChieu={drawerLichChieu} titleDraw={titleDraw} />
					</div>
				</TabPanel>
				<TabPanel>
					<div className="addUser">
						<Button
							type="primary"
							onClick={() => {
								showDrawer();
								setIsEdit(false);
							}}
						>
							<PlusOutlined /> Thêm người dùng
						</Button>
						<DrawerNguoiDung onClose={onClose} stateDrawer={stateDrawer} isEdit={isEdit} />
					</div>
					<div className="searchUser">
						<input
							className="inputSearch"
							placeholder="Nhập vào tên người dùng hoặc tài khoản"
							value={searchTerm}
							onChange={handleChange}
						/>
						<SearchOutlined className="iconSearch" />
					</div>
					<div className="tableUser">
						<TableNguoiDung onClose={onClose} stateDrawer={stateDrawer} showDrawer={showDrawer} setIsEdit={setIsEdit}>
							<DrawerNguoiDung onClose={onClose} stateDrawer={stateDrawer} />
						</TableNguoiDung>
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
}

export default Content;
