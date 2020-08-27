import React, { useState } from "react";
import Header from "../../component/layout/Header";
import Carousels from "../../component/layout/Carousel";
import Search from "../../component/layout/Search";
import Grid from "../../component/layout/Grid";
import MovieItem from "../../component/layout/MovieItem";

//hooks
import useHomeFetch from "../../component/hooks/useHomeFetch";

// import NoImage from "../../component/images/no_image.jpg";
import { SEARCH_BASE_URL, MOVIE_API_URL } from "../../config/setting";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [{ state, error }, fetchMovie] = useHomeFetch(searchTerm);

	const searchMovies = (search) => {
		const url = search ? SEARCH_BASE_URL + search : MOVIE_API_URL;
		setSearchTerm(search);
		fetchMovie(url);
	};

	return (
		<div>
			<Header />
			<Carousels />
			<Search callback={searchMovies} />
			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{state?.map((movie) => (
					<MovieItem key={movie.maPhim} clickable hinhAnh={movie.hinhAnh} maPhim={movie.maPhim} tenPhim={movie.tenPhim} />
				))}
			</Grid>
		</div>
	);
}

export default Home;
