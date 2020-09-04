import React, { useState } from "react";
//component
import Header from "../../component/layout/Header";
import Carousels from "../../component/layout/Carousel";
import Search from "../../component/layout/Search";
import Grid from "../../component/layout/Grid";
import MovieItem from "../../component/layout/MovieItem";
import CinemaList from "../../component/layout/CinemaList";
import Footer from "../../component/layout/Footer";
//hooks
import useHomeFetch from "../../component/hooks/useHomeFetch";
//config ,addtion
import NoImage from "../../component/images/no_image.jpg";
import { SEARCH_BASE_URL, MOVIE_API_URL } from "../../config/setting";
import { BackTop } from "antd";
import { StyledBackTop } from "../../styles/StyledBackToTop";
import "antd/dist/antd.css";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [{ movies }, fetchMovie] = useHomeFetch(searchTerm);

	const searchMovies = (search) => {
		const url = search ? SEARCH_BASE_URL + search : MOVIE_API_URL;
		setSearchTerm(search);
		fetchMovie(url);
	};

	return (
		<div>
			{/* <Header /> */}
			<Carousels />
			<Search callback={searchMovies} />
			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{movies?.map((movie) => (
					<MovieItem key={movie.maPhim} clickable hinhAnh={movie.hinhAnh} maPhim={movie.maPhim} tenPhim={movie.tenPhim} />
				))}
			</Grid>
			<CinemaList />
			<BackTop>
				<StyledBackTop>UP</StyledBackTop>
			</BackTop>
			<Footer />
		</div>
	);
}

export default Home;
