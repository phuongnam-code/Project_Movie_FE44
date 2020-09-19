import React from "react";
import { StyledFooter, StyledFooterContent, StyledFooterDesign } from "../../styles/StyledFooter";
import { useSelector } from "react-redux";

function Footer() {
	const cinemaList = useSelector((state) => state.movieReducer.systemCinema);
	return (
		<StyledFooter>
			<StyledFooterContent>
				<div>
					<h3>React | FreeMovies</h3>
					<ul>
						<li>
							<a href="https://reactjs.org/docs/hooks-faq.html">Hooks FAQ</a>
						</li>
						<li>
							<a href="https://en.wikipedia.org/wiki/Brand">Brand Guidelines</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Partner</h3>
					<div>
						{cinemaList.map((rap) => (
							<img src={rap.logo} alt={rap.tenHeThongRap} />
						))}
					</div>
				</div>
				<div>
					<h3>APIs & Instructor</h3>
					<p>
						<a href="https://cybersoft.edu.vn/">cybersoft.edu.vn</a>
					</p>
				</div>
			</StyledFooterContent>
			<StyledFooterDesign>
				<h4>
					Copyright ©2020 | Design by <a href="https://dev.to/phuongnamcode">Phương Nam</a>
				</h4>
			</StyledFooterDesign>
		</StyledFooter>
	);
}

export default Footer;
