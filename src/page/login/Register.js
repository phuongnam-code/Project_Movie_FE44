import React, { useState } from "react";
import { StyledRegisterContainer } from "../../styles/StyledRegister";
import { NavLink } from "react-router-dom";
import userImg from "../../component/images/user.png";
import { Row, Col } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dangKyAction } from "../../redux/actions/userAction";

function Register() {
	const { register, handleSubmit, errors } = useForm();
	// const [user, setUser] = useState({
	// 	hoTen: "",
	// 	taiKhoan: "",
	// 	matKhau: "",
	// 	email: "",
	// 	soDt: "",
	// 	maLoaiNguoiDung: "",
	// });
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		console.log(data);
		// setUser({
		// 	data,
		// });

		// call api
		dispatch(dangKyAction(data));
	};
	return (
		<StyledRegisterContainer>
			<div className="registerContent">
				<form id="register" className="register" onSubmit={handleSubmit(onSubmit)}>
					<div className="divImg">
						<img src={userImg} alt="user" />
					</div>
					<div className="registerTitle">
						<h1>SIGN UP</h1>
					</div>
					<Row>
						<Col span={12} className="colConfig">
							<div className="divUserregister">
								<label htmlFor="hoTen">Fullname: {errors.hoTen && <span>{errors.hoTen.message}</span>}</label>
								<input
									type="text"
									name="hoTen"
									ref={register({
										required: "Fullname is required",
										maxLength: {
											value: 16,
											message: "Max length is 16",
										},
									})}
								/>

								<label htmlFor="taiKhoan">Username: {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}</label>
								<input
									type="text"
									name="taiKhoan"
									ref={register({
										required: "Username is required",
										maxLength: {
											value: 16,
											message: "Max length is 16",
										},
									})}
								/>

								<label htmlFor="matKhau">Password:{errors.matKhau && <span>{errors.matKhau.message}</span>}</label>
								<input
									type="text"
									name="matKhau"
									ref={register({
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Min length is 6",
										},
									})}
								/>
							</div>
						</Col>
						<Col span={12}>
							<div className="divUserregister">
								<label htmlFor="email">Email:{errors.email && <span>{errors.email.message}</span>}</label>
								<input
									type="email"
									name="email"
									ref={register({
										required: "Email is required",
										pattern: {
											value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
											message: "Invalid email address format",
										},
									})}
								/>

								<label htmlFor="soDt">Phone:{errors.email && <span>Phone is required</span>}</label>
								<input type="number" name="soDt" ref={register({ required: true })} />

								<label htmlFor="maLoaiNguoiDung">Type:</label>
								<select name="maLoaiNguoiDung" className="slType" ref={register({ required: true })}>
									<option value="KhachHang">customer</option>
									<option value="QuanTri">admin</option>
								</select>
							</div>
						</Col>
					</Row>
					<NavLink to="/login" className="swapLoign">
						<small>Do you already have an account ?</small>
					</NavLink>
					<div className="btnDangKy">
						<button type="submit">Sign Up</button>
					</div>
				</form>
			</div>
		</StyledRegisterContainer>
	);
}

export default Register;
