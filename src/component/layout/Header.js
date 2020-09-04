import React from "react";
import { StyledGridHeader, StyledLogoHeader, StyledLinkHeader } from "../../styles/StyledHeader";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import logoCybersoft from "../images/logocybersoft.png";

function Header() {
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
					<NavLink to="/login" className="linkItem">
						LOGIN
					</NavLink>
				</StyledLinkHeader>
				<div className="logoCybersoft">
					<img src={logoCybersoft} alt="cybersoft" />
				</div>
			</StyledGridHeader>
		</div>
	);
}

export default Header;
