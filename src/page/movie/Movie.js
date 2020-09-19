import React from "react";
import { StyledGrid, StyledGridContent, StyledGridMovieItem, StyledLoadMoreBtn } from "../../styles/StyledGrid";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieListPageMovieAction } from "../../redux/actions/movieAction";
import NoImg from "../../component/images/no_image.jpg";

function Movie() {
	const dispatch = useDispatch();
	const dsPhim = useSelector((state) => state.movieReducer.pageMovieList);

	React.useEffect(() => {
		dispatch(getMovieListPageMovieAction("GP01"));
	}, []);

	// const checkImageExists = (imageUrl, callBack) => {
	// 	var imageData = new Image();
	// 	imageData.onload = function () {
	// 		callBack(true);
	// 	};
	// 	imageData.onerror = function () {
	// 		callBack(false);
	// 	};
	// 	imageData.src = imageUrl;
	// };

	// // image url that want to check
	var imageFile = "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.jpg";
	// checkImageExists(imageFile, function (existsImage) {
	// 	if (existsImage == true) {
	// 		// image exist
	// 		console.log("1");
	// 		return true;
	// 	} else {
	// 		// image not exist
	// 		console.log("2");
	// 		return false;
	// 	}
	// });

	function imageExists(image_url) {
		var http = new XMLHttpRequest();

		http.open("HEAD", image_url, false);
		http.send();

		return http.status;
	}
	return (
		<>
			<StyledGrid>
				<h1>Danh sách phim</h1>
				<StyledGridContent>
					{dsPhim.map((movie, index) => (
						<StyledGridMovieItem key={`${index}${movie.tenPhim}`}>
							<NavLink to={`/detail/${movie.maPhim}`}>
								{true ? (
									<img className="clickable" src={movie.hinhAnh} alt="mvthumb" />
								) : (
									<img className="clickable" src={NoImg} alt="mvthumb" />
								)}
								<h3>{movie.tenPhim}</h3>
							</NavLink>
						</StyledGridMovieItem>
					))}
				</StyledGridContent>
			</StyledGrid>
			<StyledLoadMoreBtn type="button" onClick="">
				Thêm phim
			</StyledLoadMoreBtn>
		</>
	);
}

export default Movie;
