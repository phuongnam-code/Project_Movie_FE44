import React, { useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { getMovieListAction, searchMovieAction, getSystemCinemaAction, getCinemaClusterAction } from "../../redux/actions/movieAction";
//component
// import Header from "../../component/layout/Header";
import Carousels from "../../component/layout/Carousel";
import SearchMovie from "../../component/layout/SearchMovie";
import GridMovies from "../../component/layout/GridMovies";
import SystemCinema from "../../component/layout/SystemCinema.js";
import Footer from "../../component/layout/Footer";
//config ,addtion
import { BackTop } from "antd";
import { StyledBackTop } from "../../styles/StyledBackToTop";
import "antd/dist/antd.css";

function Home() {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = (search) => {
		setSearchTerm(search);
	};

	useEffect(() => {
		if (searchTerm) {
			dispatch(searchMovieAction(searchTerm));
		} else {
			dispatch(getMovieListAction());
		}
		dispatch(getSystemCinemaAction());
		dispatch(getCinemaClusterAction());
	}, [searchTerm]);

	return (
		<div>
			{/* <Header /> */}
			<Carousels />
			<SearchMovie callback={searchMovies} />
			<GridMovies header={searchTerm ? "Search Result" : "Popular Movies"} />
			<SystemCinema />
			<BackTop>
				<StyledBackTop>UP</StyledBackTop>
			</BackTop>
			<Footer />
		</div>
	);
}

export default Home;
