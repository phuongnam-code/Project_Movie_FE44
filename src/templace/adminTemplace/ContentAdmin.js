import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Modal, Drawer, Form, Button, Col, Row, Input, Select, DatePicker, TimePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from "antd";

const { Option } = Select;
const titleDraw = (title) => (
	<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
		<p>{title}</p>
	</div>
);

function Content() {
	const [stateDrawer, setStateDrawer] = useState({ visible: false });
	const [drawerLichChieu, setDrawerLichChieu] = useState(false);

	const show = () => {
		setStateDrawer({
			visible: true,
		});
	};
	const htLichChieu = () => {
		setDrawerLichChieu(true);
	};

	const onClose = () => {
		setStateDrawer({
			visible: false,
		});
		setDrawerLichChieu(false);
	};

	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	const columnsMovie = [
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Mã phim</p>,
			dataIndex: "maPhim",
			key: "maPhim",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Tên phim</p>,
			dataIndex: "tenPhim",
			key: "tenPhim",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Mã nhóm</p>,
			dataIndex: "maNhom",
			key: "maNhom",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Ngày khởi chiếu</p>,
			dataIndex: "maNhom",
			key: "maNhom",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Hình ảnh</p>,
			dataIndex: "hinhAnh",
			key: "hinhAnh",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Chức năng</p>,
			key: "action",
			render: () => (
				<Space size="middle">
					<a href="#" style={{ color: "green" }} onClick={htLichChieu}>
						Tạo lịch chiếu
					</a>
					<a href="#" style={{ color: "blue" }}>
						Sửa
					</a>
					<a href="#" style={{ color: "red" }}>
						Xóa
					</a>
				</Space>
			),
		},
	];

	const dataMovie = [
		{
			maPhim: "001",
			tenPhim: "Iron man",
			maNhom: "GP01",
			ngayKhoiChieu: "12/09/2020",
			hinhAnh: "alt1",
		},
		{
			maPhim: "002",
			tenPhim: "Kẻ cắp mặt trăng 2",
			maNhom: "GP01",
			ngayKhoiChieu: "12/09/2020",
			hinhAnh: "alt2",
		},
		{
			maPhim: "003",
			tenPhim: "The Pacific",
			maNhom: "GP01",
			ngayKhoiChieu: "12/09/2020",
			hinhAnh: "alt3",
		},
	];
	const columnsUser = [
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Tài khoản</p>,
			dataIndex: "taiKhoan",
			key: "taiKhoan",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Mật khẩu</p>,
			dataIndex: "matKhau",
			key: "matKhau",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Họ và tên</p>,
			dataIndex: "hoTen",
			key: "hoTen",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Email</p>,
			dataIndex: "email",
			key: "email",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Số điện thoại</p>,
			dataIndex: "soDt",
			key: "soDt",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Thao tác</p>,
			key: "action",
			render: () => (
				<Space size="middle">
					<a href="#" style={{ color: "green" }}>
						Ghi danh
					</a>
					<a href="#" style={{ color: "blue" }}>
						Sửa
					</a>
					<a href="#" style={{ color: "red" }}>
						Xóa
					</a>
				</Space>
			),
		},
	];

	const dataUser = [
		{
			taiKhoan: "nam1",
			matKhau: "nam123",
			hoTen: "Phương Nam",
			email: "nam@gmail.com",
			soDt: "0345 37 6868",
		},
		{
			taiKhoan: "nam2",
			matKhau: "nam123",
			hoTen: "Phương Nam",
			email: "nam@gmail.com",
			soDt: "0345 37 6868",
		},
		{
			taiKhoan: "nam3",
			matKhau: "nam123",
			hoTen: "Phương Nam",
			email: "nam@gmail.com",
			soDt: "0345 37 6868",
		},
	];

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
						<Drawer
							title={titleDraw("THÊM PHIM")}
							width={720}
							onClose={onClose}
							visible={stateDrawer.visible}
							bodyStyle={{ paddingBottom: 80 }}
							footer={
								<div
									style={{
										textAlign: "right",
									}}
								>
									<Button onClick={onClose} style={{ marginRight: 8, borderColor: "red", color: "red" }}>
										Cancel
									</Button>
									<Button onClick={onClose} type="primary">
										Submit
									</Button>
								</div>
							}
						>
							<Form layout="vertical" hideRequiredMark>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="maPhim" label="Mã phim" rules={[{ required: true, message: "Please enter maPhim" }]}>
											<Input type="number" placeholder="Nhập mã phim" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="tenPhim" label="Tên phim" rules={[{ required: true, message: "Please enter tenPhim" }]}>
											<Input type="text" placeholder="Nhập tên phim" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="biDanh" label="Bí danh" rules={[{ required: true, message: "Please enter biDanh" }]}>
											<Input type="text" placeholder="Nhập bí danh" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="trailer" label="Trailer (url)" rules={[{ required: true, message: "Please enter trailer" }]}>
											<Input type="text" placeholder="Nhập trailer" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item
											name="hinhAnh"
											label="Hình ảnh (url)"
											rules={[{ required: true, message: "Please enter hinhAnh" }]}
										>
											<Input type="text" placeholder="Nhập đường dẫn hình ảnh" />
											<input type="file" id="myfile" name="myfile" style={{ marginTop: "5px" }} />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="danhGia" label="Đánh giá" rules={[{ required: true, message: "Please enter danhGia" }]}>
											<Input type="text" placeholder="Nhập đánh giá" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="maNhom" label="Mã nhóm" rules={[{ required: true, message: "Please enter maNhom" }]}>
											<Input type="text" placeholder="Nhập mã nhóm" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item
											name="ngayKhoiChieu"
											label="Ngày khởi chiếu"
											rules={[{ required: true, message: "Please choose the ngayKhoiChieu" }]}
										>
											<DatePicker style={{ width: "100%" }} getPopupContainer={(trigger) => trigger.parentElement} />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={24}>
										<Form.Item
											name="moTa"
											label="Mô tả"
											rules={[
												{
													required: true,
													message: "please enter moTa",
												},
											]}
										>
											<Input.TextArea rows={4} placeholder="Nhập mô tả" />
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Drawer>
					</div>
					<div className="searchMovie">
						<Input.Group>
							<Input.Search className="inputSearch" placeholder="Nhập vào tên phim hoặc mã phim" />
						</Input.Group>
					</div>
					<div className="tableMovie">
						<Table columns={columnsMovie} dataSource={dataMovie} style={{ textAlign: "center" }} />
						<Drawer
							title={titleDraw("THÔNG TIN LỊCH CHIẾU: ...")}
							width={720}
							onClose={onClose}
							visible={drawerLichChieu}
							bodyStyle={{ paddingBottom: 80 }}
							footer={
								<div
									style={{
										textAlign: "right",
									}}
								>
									<Button onClick={onClose} style={{ marginRight: 8, borderColor: "red", color: "red" }}>
										Cancel
									</Button>
									<Button onClick={onClose} type="primary">
										Submit
									</Button>
								</div>
							}
						>
							<Form layout="vertical">
								<Row gutter={16}>
									<Col span={8}>
										<Form.Item>
											<Select placeholder="Chọn hệ thống rạp" style={{ width: 200 }} onChange={handleChange}>
												<Option value="CGV">CGV</Option>
												<Option value="BHD">BHD</Option>
												<Option value="Galaxy">Galaxy</Option>
											</Select>
										</Form.Item>
										<Form.Item>
											<Select placeholder="Chọn cụm rạp" style={{ width: 200 }} onChange={handleChange}>
												<Option value="CGV">CGV</Option>
												<Option value="BHD">BHD</Option>
												<Option value="Galaxy">Galaxy</Option>
											</Select>
										</Form.Item>
										<Form.Item>
											<Select placeholder="Chọn rạp" style={{ width: 200 }} onChange={handleChange}>
												<Option value="CGV">CGV</Option>
												<Option value="BHD">BHD</Option>
												<Option value="Galaxy">Galaxy</Option>
											</Select>
										</Form.Item>
										<Form.Item>
											Mã lịch chiếu:
											<Input type="text" placeholder="Mã lịch chiếu" style={{ width: "100px", marginLeft: "10px" }} />
										</Form.Item>
									</Col>
									<Col span={16}>
										<Form.Item>
											Chọn ngày chiếu - giờ chiếu:
											<Space direction="vertical" style={{ marginLeft: "10px" }}>
												<DatePicker style={{ width: "100px" }} />
											</Space>
											<Space direction="vertical" style={{ marginLeft: "10px" }}>
												<TimePicker style={{ width: "100px" }} />
											</Space>
										</Form.Item>
										<Form.Item>
											<Row>
												<Col span={6}>Thời lượng:</Col>
												<Col span={18}>
													<Input type="text" placeholder="Thời gian (phút)" style={{ width: "150px" }} />
												</Col>
											</Row>
										</Form.Item>
										<Form.Item>
											<Row>
												<Col span={6}>Mã nhóm:</Col>
												<Col span={18}>
													<Input type="text" placeholder="Mã nhóm (GP01)" style={{ width: "150px" }} />
												</Col>
											</Row>
										</Form.Item>
										<Form.Item>
											<Row>
												<Col span={6}>Giá vé:</Col>
												<Col span={18}>
													<Input type="text" placeholder="Giá vé (vnđ)" style={{ width: "150px" }} />
												</Col>
											</Row>
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Drawer>
					</div>
				</TabPanel>
				<TabPanel>
					<div className="addUser">
						<Button type="primary" onClick={show}>
							<PlusOutlined /> Thêm người dùng
						</Button>
						<Drawer
							title={titleDraw("THÊM NGƯỜI DÙNG")}
							width={720}
							onClose={onClose}
							visible={stateDrawer.visible}
							bodyStyle={{ paddingBottom: 80 }}
							footer={
								<div
									style={{
										textAlign: "right",
									}}
								>
									<Button onClick={onClose} style={{ marginRight: 8, borderColor: "red", color: "red" }}>
										Cancel
									</Button>
									<Button onClick={onClose} type="primary">
										Submit
									</Button>
								</div>
							}
						>
							<Form layout="vertical" hideRequiredMark>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="taiKhoan" label="Tài khoản" rules={[{ required: true, message: "Please enter taiKhoan" }]}>
											<Input type="text" placeholder="Nhập vào tài khoản" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="matKhau" label="Mật khẩu" rules={[{ required: true, message: "Please enter matKhau" }]}>
											<Input type="text" placeholder="Nhập vào mật khẩu" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter email" }]}>
											<Input type="text" placeholder="Nhập vào email" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="soDt" label="Số điện thoại" rules={[{ required: true, message: "Please enter soDt" }]}>
											<Input type="number" placeholder="Nhập vào số điện thoại" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item name="hoTen" label="Họ và tên" rules={[{ required: true, message: "Please enter hoTen" }]}>
											<Input type="text" placeholder="Nhập vào họ và tên" />
										</Form.Item>
									</Col>
									<Col span={12}>
										<Form.Item name="maNhom" label="Mã nhóm" rules={[{ required: true, message: "Please enter maNhom" }]}>
											<Input type="text" placeholder="Nhập vào mã nhóm" />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form.Item
											name="maLoaiNguoiDung"
											label="Mã loại người dùng"
											rules={[{ required: true, message: "Please choose the maLoaiNguoiDung" }]}
										>
											<Select placeholder="Chọn mã loại người dùng">
												<Option value="jack">Khách hàng</Option>
												<Option value="tom">Quản trị</Option>
											</Select>
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Drawer>
					</div>
					<div className="searchUser">
						<Input.Group>
							<Input.Search className="inputSearch" placeholder="Nhập vào tên người dùng hoặc tài khoản" />
						</Input.Group>
					</div>
					<div className="tableUser">
						<Table columns={columnsUser} dataSource={dataUser} style={{ textAlign: "center" }} />
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
}

export default Content;
