import React, { useEffect, useState } from "react";
import { Drawer, Col, Row } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { styleLabel, styleInput, styleSelect, styleButton, styleForm, styleSpan } from "../../styles/StyledDrawer";
import { addUserAction, editUserAction } from "../../redux/actions/adminUserAction";

function DrawerNguoiDung({ onClose, stateDrawer, isEdit }) {
	const { register, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();
	const message = useSelector((state) => state.alertReducer.message);
	let editUser = useSelector((state) => state.adminReducer.editUser);
	const [newInfoUser, setNewInfoUser] = useState({});

	const onSubmit = (data) => {
		// onClose();
		if (isEdit) {
			dispatch(editUserAction(data));
			return;
		}
		dispatch(addUserAction(data));
	};
	const handlChange = (event) => {
		console.log(event.target.value);
		setNewInfoUser({ matKhau: event.target.value });
		console.log(newInfoUser);
	};

	return (
		<>
			<Drawer
				title={
					isEdit ? (
						<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
							<p>SỬA NGƯỜI DÙNG</p>
						</div>
					) : (
						<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
							<p>THÊM NGƯỜI DÙNG</p>
						</div>
					)
				}
				width={720}
				onClose={onClose}
				visible={stateDrawer}
				bodyStyle={{ padding: 0 }}
			>
				<form layout="vertical" hideRequiredMark onSubmit={handleSubmit(onSubmit)} style={styleForm}>
					<div>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>
									Tài khoản {errors.taiKhoan && <span style={{ color: "red" }}>{errors.taiKhoan.message}</span>}
								</label>
								<input
									style={styleInput}
									type="text"
									placeholder="Nhập vào tài khoản"
									ref={register({
										required: "taiKhoan is required",
									})}
									name="taiKhoan"
									value={editUser.taiKhoan}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Mật khẩu {errors.matKhau && <span style={{ color: "red" }}>{errors.matKhau.message}</span>}
								</label>
								<input
									style={styleInput}
									type="text"
									placeholder="Nhập vào mật khẩu"
									ref={register({
										required: "password is required",
										minLength: {
											value: 6,
											message: "Min length is 6",
										},
									})}
									name="matKhau"
									value={editUser.matKhau}
									onChange={handlChange}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>Email {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}</label>
								<input
									style={styleInput}
									type="text"
									placeholder="Nhập vào email"
									ref={register({
										required: "email is required",
										pattern: {
											value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
											message: "Invalid email address format",
										},
									})}
									name="email"
									value={editUser.email}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Số điện thoại {errors.soDt && <span style={{ color: "red" }}>{errors.soDt.message}</span>}
								</label>
								<input
									style={styleInput}
									type="number"
									placeholder="Nhập vào số điện thoại"
									ref={register({
										required: "soDt is required",
									})}
									name="soDt"
									value={editUser.soDt}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>
									Họ tên {errors.hoTen && <span style={{ color: "red" }}>{errors.hoTen.message}</span>}
								</label>
								<input
									style={styleInput}
									type="text"
									placeholder="Nhập vào họ và tên"
									ref={register({
										required: "hoTen is required",
									})}
									name="hoTen"
									value={editUser.hoTen}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Mã nhóm {errors.maNhom && <span style={{ color: "red" }}>{errors.maNhom.message}</span>}
								</label>
								<input
									style={styleInput}
									type="text"
									placeholder="Nhập vào mã nhóm"
									ref={register({
										required: "maNhom is required",
									})}
									name="maNhom"
									defaultValue="GP01"
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>Mã loại người dùng</label>
								<select
									style={styleSelect}
									placeholder="Chọn mã loại người dùng"
									ref={register({
										required: "maLoaiNguoiDung is required",
									})}
									defaultValue="KhachHang"
									name="maLoaiNguoiDung"
								>
									<option value="KhachHang">Khách hàng</option>
									<option value="QuanTri">Quản trị</option>
								</select>
							</Col>
						</Row>
						<div style={{ color: "red", padding: "20px", textAlign: "center", fontSize: "18px" }}> {message}</div>
					</div>

					<div style={{ textAlign: "right", padding: "10px 0" }}>
						<span onClick={onClose} style={styleSpan}>
							Cancel
						</span>
						{isEdit ? <button style={styleButton}>Edit</button> : <button style={styleButton}>Submit</button>}
					</div>
				</form>
			</Drawer>
		</>
	);
}

export default DrawerNguoiDung;
