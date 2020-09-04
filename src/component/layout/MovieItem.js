import React from "react";
import { StyledMovieItem } from "../../styles/StyledMovieItem";
import { NavLink } from "react-router-dom";

function MovieItem({ clickable, maPhim, tenPhim, hinhAnh }) {
	return (
		<StyledMovieItem>
			{clickable ? (
				<NavLink to={`/detail/${maPhim}`}>
					<img className="clickable" src={hinhAnh} alt="mvthumb" />
					<h3>{tenPhim}</h3>
				</NavLink>
			) : (
				<img src={hinhAnh} alt="mvthumb" />
			)}
		</StyledMovieItem>
	);
}

export default MovieItem;
