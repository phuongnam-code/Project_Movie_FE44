import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, TimePicker, Table, Tag, Space } from "antd";

const { Option } = Select;
function DrawerLichChieu({ onClose, drawerLichChieu, titleDraw }) {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	return (
		<>
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
		</>
	);
}

export default DrawerLichChieu;
