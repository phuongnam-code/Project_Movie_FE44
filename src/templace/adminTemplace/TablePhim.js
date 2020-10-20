import React from "react";
import { Table, Tag, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { delMovieAction, getMovieListAction } from "../../redux/actions/adminMovieAction";
import { edit_movie } from "../../redux/types/adminType";

function TablePhim({ htLichChieu, showDrawer, setIsEdit }) {
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
			render: (movie) => (
				<Space size="middle">
					<a href="#" style={{ color: "green" }} onClick={htLichChieu}>
						Tạo lịch chiếu
					</a>
					<a
						href="#"
						style={{ color: "blue" }}
						onClick={() => {
							showDrawer();
							setIsEdit(true);
							dispatch({
								type: edit_movie,
								movie: movie,
							});
						}}
					>
						Sửa
					</a>
					<a
						href="#"
						style={{ color: "red" }}
						onClick={() => {
							dispatch(delMovieAction(movie.maPhim));
						}}
					>
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
