import React from "react";
import { Table, Tag, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListAction } from "../../redux/actions/adminMovieAction";

function TablePhim({ htLichChieu }) {
	const dsPhim = useSelector((state) => state.adminReducer.dsPhim);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getMovieListAction());
	}, []);

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
			dataIndex: "ngayKhoiChieu",
			key: "ngayKhoiChieu",
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
	const dataMovie = dsPhim;

	return <Table columns={columnsMovie} dataSource={dataMovie} style={{ textAlign: "center" }} />;
}

export default TablePhim;
