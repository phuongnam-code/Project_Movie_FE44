import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.jpg";
import carousel4 from "../images/carousel4.png";
import carousel5 from "../images/carousel5.png";

function Carousels() {
	return (
		<Carousel autoplay>
			<div>
				<img src={carousel1} alt="abc" width="100%" />
			</div>
			<div>
				<img src={carousel2} alt="abc" width="100%" />
			</div>
			<div>
				<img src={carousel3} alt="abc" width="100%" />
			</div>
			<div>
				<img src={carousel4} alt="abc" width="100%" />
			</div>
			<div>
				<img src={carousel5} alt="abc" width="100%" />
			</div>
		</Carousel>
	);
}

export default Carousels;
