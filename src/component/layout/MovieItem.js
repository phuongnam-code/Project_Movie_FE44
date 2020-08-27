import React from "react";
import { StyledMovieItem } from "../styles/StyledMovieItem";
import { Link } from "@reach/router";

function MovieItem({ clickable, maPhim, tenPhim, hinhAnh }) {
	return (
		<StyledMovieItem>
			{clickable ? (
				<Link to={`/${maPhim}`}>
					<img className="clickable" src={hinhAnh} alt="mvthumb" />
					<h3>{tenPhim}</h3>
				</Link>
			) : (
				<img src={hinhAnh} alt="mvthumb" />
			)}
		</StyledMovieItem>
	);
}

export default MovieItem;
