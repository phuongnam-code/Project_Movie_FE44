import React, { useState, useEffect } from "react";
import { Drawer, Col, Row } from "antd";
import { styleLabel, styleInput, styleButton, styleForm, styleSpan, styleTextarea } from "../../styles/StyledDrawer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMovieAction, editMovieAction, uploadMovieAction } from "../../redux/actions/adminMovieAction";

function DrawerPhim({ onClose, stateDrawer, isEdit }) {
	const { register, handleSubmit, errors } = useForm();
	const message = useSelector((state) => state.alertReducer.message);
	const dispatch = useDispatch();
	const [img, setImg] = useState(null);
	let editMovie = useSelector((state) => state.adminReducer.editMovie);

	const [newInfoMovie, setNewInfoMovie] = useState({});

	useEffect(() => {
		setNewInfoMovie(editMovie);
	}, [editMovie]);

	const onSubmit = (data) => {
		// console.log(data);
		const formData = new FormData();
		for (let key in data) {
			formData.append(key, data[key]);
		}
		formData.append("hinhAnh", img);

		if (isEdit) {
			console.log("hi");
			// dispatch(editMovieAction(data));
			dispatch(uploadMovieAction(data));
			return;
		}
		console.log("false");
		dispatch(addMovieAction(formData));
	};
	const handlChange = (event) => {
		// console.log(event.target.value);
		const { value } = event.target;
		setImg(event.target.files[0]);
		setNewInfoMovie({ name: value });
	};
	return (
		<>
			<Drawer
				title={
					isEdit ? (
						<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
							<p>SỬA THÔNG TIN </p>
						</div>
					) : (
						<div style={{ fontSize: "26px", fontWeight: "600", textAlign: "center" }}>
							<p>THÊM PHIM</p>
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
									Mã phim{errors.maPhim && <span style={{ color: "red" }}>{errors.maPhim.message}</span>}
								</label>
								<input
									// disabled
									type="number"
									style={styleInput}
									placeholder="CHÚ Ý: BACKEND TỰ TẠO MÃ"
									ref={register}
									name="maPhim"
									value={newInfoMovie.maPhim}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Tên phim{errors.tenPhim && <span style={{ color: "red" }}>{errors.tenPhim.message}</span>}
								</label>
								<input
									type="text"
									style={styleInput}
									placeholder="Nhập tên phim"
									ref={register({
										required: "tenPhim is required",
									})}
									name="tenPhim"
									value={newInfoMovie.tenPhim}
									onChange={handlChange}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>
									Bí danh{errors.biDanh && <span style={{ color: "red" }}>{errors.biDanh.message}</span>}
								</label>
								<input
									type="text"
									style={styleInput}
									placeholder="Nhập bí danh"
									ref={register({
										required: "biDanh is required",
									})}
									name="biDanh"
									value={newInfoMovie.biDanh}
									onChange={handlChange}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Trailer {errors.trailer && <span style={{ color: "red" }}>{errors.trailer.message}</span>}
								</label>
								<input
									type="text"
									style={styleInput}
									placeholder="Nhập trailer phim"
									ref={register({
										required: "trailer is required",
									})}
									name="trailer"
									value={newInfoMovie.trailer}
									onChange={handlChange}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>
									Hình ảnh {errors.hinhAnh && <span style={{ color: "red" }}>{errors.hinhAnh.message}</span>}
								</label>
								<input
									type="file"
									style={styleInput}
									placeholder="Đường dẫn hình ảnh"
									// onChange={(event) => setImg(event.target.files[0])}
									onChange={handlChange}
									name="hinhAnh"
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Đánh giá {errors.danhGia && <span style={{ color: "red" }}>{errors.danhGia.message}</span>}
								</label>
								<input
									// disabled
									type="text"
									style={styleInput}
									placeholder="KHÔNG CẦN ĐÁNH GIÁ"
									ref={register}
									name="danhGia"
									value={newInfoMovie.danhGia}
									onChange={handlChange}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<label style={styleLabel}>
									Mã nhóm {errors.maNhom && <span style={{ color: "red" }}>{errors.maNhom.message}</span>}
								</label>
								<input
									type="text"
									style={styleInput}
									placeholder="Nhập mã nhóm"
									ref={register({
										required: "maNhom is required",
									})}
									name="maNhom"
									value={newInfoMovie.maNhom}
								/>
							</Col>
							<Col span={12}>
								<label style={styleLabel}>
									Ngày khởi chiếu {errors.ngayKhoiChieu && <span style={{ color: "red" }}>{errors.ngayKhoiChieu.message}</span>}
								</label>
								<input
									type="text"
									style={styleInput}
									getPopupContainer={(trigger) => trigger.parentElement}
									ref={register({
										required: "ngayKhoiChieu is required",
									})}
									name="ngayKhoiChieu"
									value={newInfoMovie.ngayKhoiChieu}
									onChange={handlChange}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={24}>
								<label style={styleLabel}>Mô tả {errors.moTa && <span style={{ color: "red" }}>{errors.moTa.message}</span>}</label>
								<textarea
									name="moTa"
									style={styleTextarea}
									ref={register({
										required: "mota is required",
									})}
									rows="3"
									cols="10"
									value={newInfoMovie.moTa}
									onChange={handlChange}
								></textarea>
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

export default DrawerPhim;
