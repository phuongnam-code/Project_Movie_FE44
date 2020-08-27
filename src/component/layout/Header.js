import React from "react";
import { StyledGridHeader, StyledLogoHeader, StyledLinkHeader } from "../styles/StyledHeader";
import { Link } from "@reach/router";

function Header() {
	return (
		<div style={{ background: "#B4B4B2" }}>
			<StyledGridHeader>
				<StyledLogoHeader>
					<Link to="/">
						<h1 className="logoHeader">
							<span>M</span>ovies <span>F</span>ree
						</h1>
					</Link>
				</StyledLogoHeader>
				<StyledLinkHeader>
					<Link to="/" className="linkItem">
						HOME
					</Link>
					<Link to="/movies" className="linkItem">
						MOVIES
					</Link>
					<Link to="/login" className="linkItem">
						LOGIN
					</Link>
				</StyledLinkHeader>
			</StyledGridHeader>
		</div>
	);
}

export default Header;
