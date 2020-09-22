import React from "react";
import { Table, Tag, Space } from "antd";

function TableNguoiDung() {
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

	return <Table columns={columnsUser} dataSource={dataUser} style={{ textAlign: "center" }} />;
}

export default TableNguoiDung;
