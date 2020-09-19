import React from "react";
import { StyledGridHeader, StyledLogoHeader, StyledLinkHeader } from "../../styles/StyledHeader";
import { NavLink, Redirect, Link } from "react-router-dom";
import logo from "../images/logo.svg";
import logoCybersoft from "../images/logocybersoft.png";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";
import { dangXuatAction } from "../../redux/actions/userAction";

function Header() {
	const nguoiDung = useSelector((state) => state.userReducer.nguoiDung);
	let dispatch = useDispatch();

	const menu = (
		<Menu>
			<Menu.Item>
				<NavLink to="/profile">Profile</NavLink>
			</Menu.Item>
			<Menu.Item>
				<NavLink to="/admin">Admin</NavLink>
			</Menu.Item>
			<Menu.Item>
				<a href="/" onClick={() => dispatch(dangXuatAction())}>
					Logout
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<div style={{ background: "#B4B4B2" }}>
			<StyledGridHeader>
				<StyledLogoHeader>
					<NavLink to="/" className="logoHeader">
						<div className="logoMovie">
							<img src={logo} alt="logo" />
						</div>
						<div className="nameLogoHerder">
							<span className="logoStyle ">F</span>ree
							<br />
							<span className="logoStyle ">M</span>ovies
						</div>
					</NavLink>
				</StyledLogoHeader>
				<StyledLinkHeader>
					<NavLink to="/" className="linkItem">
						HOME
					</NavLink>
					<NavLink to="/movies" className="linkItem">
						MOVIES
					</NavLink>
					{nguoiDung?.taiKhoan ? (
						<Dropdown overlay={menu}>
							<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ color: "#e3ff00" }}>
								Hello! {nguoiDung?.taiKhoan}
							</a>
						</Dropdown>
					) : (
						<NavLink to="/login" className="linkItem">
							LOGIN
						</NavLink>
					)}
				</StyledLinkHeader>
				<div className="logoCybersoft">
					<a href="https://cybersoft.edu.vn/" target="_blank">
						<img src={logoCybersoft} alt="cybersoft" />
					</a>
				</div>
			</StyledGridHeader>
		</div>
	);
}

export default Header;
