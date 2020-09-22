import React from "react";
import { Drawer, Form, Button, Col, Row, Input, DatePicker } from "antd";

function DrawerPhim({ onClose, stateDrawer, titleDraw }) {
	return (
		<>
			<Drawer
				title={titleDraw("THÊM PHIM")}
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
							<Form.Item name="hinhAnh" label="Hình ảnh (url)" rules={[{ required: true, message: "Please enter hinhAnh" }]}>
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
		</>
	);
}

export default DrawerPhim;
