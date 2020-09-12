import React from "react";
import { StyledGridHeader, StyledLogoHeader, StyledLinkHeader } from "../../styles/StyledHeader";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import logoCybersoft from "../images/logocybersoft.png";
import { useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Header() {
	const nguoiDung = useSelector((state) => state.userReducer.nguoiDung);

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
					{nguoiDung.taiKhoan ? (
						<Dropdown overlay={menu}>
							<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ color: "#e3ff00" }}>
								Hello! {nguoiDung.taiKhoan}
							</a>
						</Dropdown>
					) : (
						<NavLink to="/login" className="linkItem">
							LOGIN
						</NavLink>
					)}
				</StyledLinkHeader>
				<div className="logoCybersoft">
					<img src={logoCybersoft} alt="cybersoft" />
				</div>
			</StyledGridHeader>
		</div>
	);
}

export default Header;
