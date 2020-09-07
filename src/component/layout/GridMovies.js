import React, { useState, useEffect } from "react";
import { StyledGrid, StyledGridContent, StyledGridMovieItem } from "../../styles/StyledGrid";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import NoImage from "../images/no_image.jpg";

function Grid({ header }) {
	const dsPhim = useSelector((state) => state.movieReducer.movieList);

	return (
		<StyledGrid>
			<h1>{header}</h1>
			<StyledGridContent>
				{dsPhim.map((movie, index) => (
					<StyledGridMovieItem key={`${index}${movie.tenPhim}`}>
						<NavLink to={`/detail/${movie.maPhim}`}>
							<img className="clickable" src={movie.hinhAnh} alt="mvthumb" />
							<h3>{movie.tenPhim}</h3>
						</NavLink>
					</StyledGridMovieItem>
				))}
			</StyledGridContent>
		</StyledGrid>
	);
}

export default Grid;
