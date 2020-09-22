import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, TimePicker, Table, Tag, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DrawerPhim from "./DrawerPhim";
import DrawerNguoiDung from "./DrawerNguoiDung";
import TableNguoiDung from "./TableNguoiDung";
import TablePhim from "./TablePhim";
import DrawerLichChieu from "./DrawerLichChieu";

const { Option } = Select;
const titleDraw = (title) => (
	<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
		<p>{title}</p>
	</div>
);

function Content() {
	const [stateDrawer, setStateDrawer] = useState(false);
	const [drawerLichChieu, setDrawerLichChieu] = useState(false);

	const show = () => {
		setStateDrawer(true);
	};
	const htLichChieu = () => {
		setDrawerLichChieu(true);
	};

	const onClose = () => {
		setStateDrawer(false);
		setDrawerLichChieu(false);
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
						<Button type="primary" onClick={show}>
							<PlusOutlined /> Thêm phim
						</Button>
						<DrawerPhim onClose={onClose} stateDrawer={stateDrawer} titleDraw={titleDraw} />
					</div>
					<div className="searchMovie">
						<Input.Group>
							<Input.Search className="inputSearch" placeholder="Nhập vào tên phim hoặc mã phim" />
						</Input.Group>
					</div>
					<div className="tableMovie">
						<TablePhim htLichChieu={htLichChieu} />
						<DrawerLichChieu onClose={onClose} drawerLichChieu={drawerLichChieu} titleDraw={titleDraw} />
					</div>
				</TabPanel>
				<TabPanel>
					<div className="addUser">
						<Button type="primary" onClick={show}>
							<PlusOutlined /> Thêm người dùng
						</Button>
						<DrawerNguoiDung onClose={onClose} stateDrawer={stateDrawer} titleDraw={titleDraw} />
					</div>
					<div className="searchUser">
						<Input.Group>
							<Input.Search className="inputSearch" placeholder="Nhập vào tên người dùng hoặc tài khoản" />
						</Input.Group>
					</div>
					<div className="tableUser">
						<TableNguoiDung />
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
}

export default Content;
