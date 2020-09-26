import React, { useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { delUserAction, getUserListAction } from "../../redux/actions/adminUserAction";
import { edit_user } from "../../redux/types/adminType";

function TableNguoiDung({ showDrawer, setIsEdit }) {
	const dsNguoiDung = useSelector((state) => state.adminReducer.dsNguoiDung);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserListAction());
	}, []);

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
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Mã loại người dùng</p>,
			dataIndex: "maLoaiNguoiDung",
			key: "maLoaiNguoiDung",
		},
		{
			title: <p style={{ fontWeight: "600", fontSize: "16px" }}>Thao tác</p>,
			key: "action",
			render: (user) => (
				<Space size="middle">
					{/* <a href="#" style={{ color: "green" }}>
						Ghi danh
					</a> */}
					<a
						href="#"
						style={{ color: "blue" }}
						onClick={() => {
							showDrawer();
							setIsEdit(true);
							dispatch({
								type: edit_user,
								user: user,
							});
						}}
					>
						Sửa
					</a>
					<a
						href="#"
						style={{ color: "red" }}
						onClick={() => {
							// dispatch(delUserAction({ taiKhoan: user.taiKhoan }));
							dispatch(delUserAction(user.taiKhoan));
						}}
					>
						Xóa
					</a>
				</Space>
			),
		},
	];

	const dataUser = dsNguoiDung;

	return (
		<>
			<Table columns={columnsUser} dataSource={dataUser} style={{ textAlign: "center" }} />
		</>
	);
}

export default TableNguoiDung;
