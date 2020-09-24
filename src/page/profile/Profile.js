import React, { useEffect, useState } from "react";
import { StyledProfile } from "../../styles/StyledProfile";
import profile from "../../component/images/profile.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { userChangeProfileAction, userProfileAction } from "../../redux/actions/userAction";
import { Button, Col, Row, Select, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const { Option } = Select;

function Profile() {
	const { register, handleSubmit, errors } = useForm();
	let dispatch = useDispatch();
	const [stateDrawer, setStateDrawer] = useState({ visible: false });

	useEffect(() => {
		dispatch(userProfileAction());
	}, []);

	let userProfile = useSelector((state) => state.userReducer.userProfile);

	const show = () => {
		setStateDrawer({
			visible: true,
		});
	};
	const onClose = () => {
		setStateDrawer({
			visible: false,
		});
	};

	const columns = [
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Tên phim</p>,
			dataIndex: "tenPhim",
			key: "tenPhim",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Mã vé</p>,
			dataIndex: "maVe",
			key: "maVe",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Ngày đặt</p>,
			dataIndex: "ngayDat",
			key: "ngayDat",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Giá vé</p>,
			key: "giaVe",
			dataIndex: "giaVe",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Tên rạp</p>,
			key: "tenRap ",
			dataIndex: "tenRap",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Rạp</p>,
			key: "rap_ghe ",
			dataIndex: "rap_ghe",
		},
	];
	const data = [];

	const onSubmit = (data) => {
		dispatch(userChangeProfileAction(data));
	};

	const [divForm, setDivForm] = useState(false);
	let message = useSelector((state) => state.alertReducer.message);

	return (
		<StyledProfile>
			<div className="backgroundProfile">
				<img src={profile} alt="background" />
			</div>
			<div className="profileContent">
				<Tabs>
					<TabList>
						<Tab>
							<h3>Thông tin cá nhân</h3>
						</Tab>
						<Tab>
							<h3>Lịch sử đặt vé</h3>
						</Tab>
					</TabList>
					<TabPanel>
						<Row>
							<Col span={8} className="colLeftProfile">
								<p className="profileTitle">Họ tên:</p>
								<p className="profileTitle">Email:</p>
								<p className="profileTitle">Tài khoản:</p>
								<p className="profileTitle">Mật khẩu:</p>
								<p className="profileTitle">Số điện thoại:</p>
								<p className="profileTitle">Mã nhóm:</p>
								<p className="profileTitle">Loại người dùng:</p>
							</Col>
							<Col span={12} className="colRightProfile">
								{divForm ? (
									<div className="formEdit">
										<form onSubmit={handleSubmit(onSubmit)}>
											<input type="text" ref={register({ required: true })} name="hoTen" placeholder="hoten" />
											<input type="text" ref={register({ required: true })} name="email" placeholder="email" />
											<input type="text" ref={register({ required: true })} value={userProfile.taiKhoan} name="taiKhoan" />
											<input type="text" ref={register({ required: true })} name="matKhau" placeholder="matkhau" />
											<input type="text" ref={register({ required: true })} name="soDt" placeholder="sodt" />
											<input type="text" ref={register({ required: true })} value={userProfile.maNhom} name="maNhom" />
											<input type="text" ref={register({ required: true })} value="KhachHang" name="maLoaiNguoiDung" />
											<button type="submit">Submit</button>
										</form>
									</div>
								) : (
									<div>
										<p>{userProfile.hoTen ? userProfile.hoTen : "null"}</p>
										<p>{userProfile.email ? userProfile.email : "null"}</p>
										<p>{userProfile.taiKhoan ? userProfile.taiKhoan : "null"}</p>
										<p>{userProfile.matKhau ? userProfile.matKhau : "null"}</p>
										<p>{userProfile.soDT ? userProfile.soDT : "null"}</p>
										<p>{userProfile.maNhom ? userProfile.maNhom : "null"}</p>
										<p>{userProfile.loaiNguoiDung ? userProfile.loaiNguoiDung : "null"}</p>
									</div>
								)}
							</Col>
							<Col span={4}>
								<Button type="primary" onClick={() => setDivForm(!divForm)}>
									<EditOutlined /> Chỉnh sửa
								</Button>
							</Col>
						</Row>
					</TabPanel>
					<TabPanel>
						{userProfile.thongTinDatVe?.map((item) => {
							let ghe, rap, tenRap;
							item.danhSachGhe.map((item) => {
								tenRap = item.tenHeThongRap;
								rap = item.tenRap;
								ghe = item.tenGhe;
							});
							data.push({
								tenPhim: item.tenPhim,
								maVe: item.maVe,
								ngayDat: moment(item.ngayDat).format("MMM Do YY"),
								giaVe: item.giaVe,
								tenRap: tenRap,
								rap_ghe: `${rap} - Ghế: ${ghe}`,
							});
						})}
						<Table columns={columns} dataSource={data} />
					</TabPanel>
				</Tabs>
			</div>
		</StyledProfile>
	);
}

export default Profile;
