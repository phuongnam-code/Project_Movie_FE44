import React from "react";
import { Table, Tag, Space } from "antd";

function TablePhim({ htLichChieu }) {
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
	return <Table columns={columnsMovie} dataSource={dataMovie} style={{ textAlign: "center" }} />;
}

export default TablePhim;
