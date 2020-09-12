import React, { useState, useEffect } from "react";
import { StyledLoginContainer } from "../../styles/StyledLogin";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction, dangXuatAction } from "../../redux/actions/userAction";
import userImg from "../../component/images/user.png";
import { useForm } from "react-hook-form";

function Login() {
	const { register, handleSubmit, errors } = useForm();
	// let [nguoiDung, setNguoiDung] = useState({
	// 	taiKhoan: "",
	// 	matKhau: "",
	// });
	let dispatch = useDispatch();

	const message = useSelector((state) => state.alertReducer.message);
	const isLogin = useSelector((state) => state.userReducer.isLogin);
	// const nguoiDung = useSelector((state) => state.userReducer.nguoiDung);

	let history = useHistory();
	if (isLogin) {
		// history.push("/");
		return <Redirect to="/profile" />;
	}

	// let handleChange = (event) => {
	// 	let { name, value } = event.target;
	// 	setNguoiDung({
	// 		...nguoiDung,
	// 		[name]: value,
	// 	});
	// };

	// let handleLogin = (event) => {
	// 	event.preventDefault();
	// 	//dispatch dữ liệu lên redux
	// 	dispatch(dangNhapAction(nguoiDung));
	// };

	const onSubmit = (data) => {
		console.log(data);
		dispatch(dangNhapAction(data));
	};

	return (
		<StyledLoginContainer>
			<div className="loginContent">
				<form id="login" className="login" onSubmit={handleSubmit(onSubmit)}>
					<div className="divImg">
						<img src={userImg} alt="user" />
					</div>
					<div className="loginTitle">
						<h1>SIGN IN</h1>
					</div>
					<div className="divUserLogin">
						<label>Username: {errors.taiKhoan && <span style={{ color: "red" }}>This is required</span>}</label>
						<br />
						<input type="text" name="taiKhoan" ref={register({ required: true })} />
					</div>
					<div className="divPassLogin">
						<label>Password: {errors.matKhau && <span style={{ color: "red" }}> This is required</span>}</label>
						<br />
						<input type="password" name="matKhau" ref={register({ required: true })} />
					</div>
					<div className="rePassword">
						<a href="">
							<small>Forgot password?</small>
						</a>
						<NavLink to="/register">
							<small>Register</small>
						</NavLink>
					</div>
					<div style={{ color: "red", marginTop: "10px" }}>{message}</div>
					<div className="btnDangNhap">
						<button type="submit">Continue</button>
					</div>
				</form>
			</div>
		</StyledLoginContainer>
	);
}

export default Login;
