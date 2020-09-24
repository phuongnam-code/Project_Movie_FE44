import React from "react";
import { StyledLogoHeader } from "../../styles/StyledHeader";
import { NavLink } from "react-router-dom";
import logo from "../../component/images/logo.svg";
import avatar from "../../component/images/user.png";
import { Menu, Dropdown } from "antd";
import { useSelector } from "react-redux";

const menu = (
	<Menu>
		<Menu.Item>
			<NavLink to="/profile">Profile</NavLink>
		</Menu.Item>
		<Menu.Item>
			<NavLink to="/login">Logout</NavLink>
		</Menu.Item>
	</Menu>
);

function Header() {
	const nguoiDung = useSelector((state) => state.userReducer.nguoiDung);
	return (
		<div className="headerAdmin">
			<StyledLogoHeader className="headerAdmin_left">
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
			<div className="headerAdmin_right">
				<Dropdown overlay={menu}>
					<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ color: "#e3ff00" }}>
						Hello! {nguoiDung?.taiKhoan} <img src={avatar} alt="avatar" />
					</a>
				</Dropdown>
			</div>
		</div>
	);
}

export default Header;
