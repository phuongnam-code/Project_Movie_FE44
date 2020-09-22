import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Select } from "antd";

const { Option } = Select;

function DrawerNguoiDung({ onClose, stateDrawer, titleDraw }) {
	return (
		<>
			<Drawer
				title={titleDraw("THÊM NGƯỜI DÙNG")}
				width={720}
				onClose={onClose}
				visible={stateDrawer}
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
		</>
	);
}

export default DrawerNguoiDung;
