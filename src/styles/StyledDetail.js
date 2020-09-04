import styled from "styled-components";
import imgDetail from "../component/images/detail.jpg";

export const StyledDetailMovieInfo = styled.div`
	background: ${(props) => (props.backdrop ? `url('${props.backdrop}')` : `${imgDetail}`)};
	background-size: cover !important;
	background-position: center !important;
	width: 100%;
	padding: 40px 0;
	box-sizing: border-box;

	.movieinfo-container {
		padding: 0 20px;
	}
	.movieinfo-content {
		max-width: 1280px;
		min-height: 427px;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 20px;
		position: relative;
	}
	.movieinfo-thumb {
		width: 270px;
		float: left;
		img {
			width: 100%;
			height: 100%;
			transition: all 0.3s;
			object-fit: cover;
			border-radius: 20px;

			:hover {
				opacity: 0.8;
			}
		}
		@media screen and (max-width: 768px) {
			width: 100% !important;
		}
	}
	.movieinfo-text {
		font-family: Arial, Helvetica, sans-serif;
		padding: 20px;
		color: white;
		overflow: hidden;
		h1 {
			color: white;
			font-family: "Abel", sans-serif;
			font-size: 48px;
			font-weight: 600;
			margin: 0;
			@media screen and (max-width: 1000px) {
				font-size: 32px !important;
			}
		}
		h3 {
			color: white;
			font-size: 18px;
			font-weight: 600;
			line-height: 0;
			margin: 30px 0;
		}
		p {
			font-family: "Abel", sans-serif;
			font-size: 16px;
			line-height: 26px;
		}
	}
	.rating-date {
		display: flex;
		justify-content: flex-start;
	}
	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		background: #fafe00eb;
		color: #000;
		font-weight: 800;
		border-radius: 25px;
		margin: 0px 0 0 0;
	}
	.dateStart {
		margin: 0 0 0 40px;
		p {
			margin: 0;
		}
	}
	.btn {
		font-family: "Abel", sans-serif;
		cursor: pointer;
		background: #2fa00b;
		border: none;
		border-radius: 7px;
		margin-top: 20px;
		width: 15%;
		padding: 5px;
		font-size: 16px;
	}
	.btn:hover {
		color: black;
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
	}
`;

export const StyledDetail = styled.div`
	// max-width: 1280px;
`;
export const StyledDetailNavigation = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 70px;
	background: #353535;
	color: #fff;
	.navigation-content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 20px;
		width: 100%;
		p {
			font-family: "Abel", sans-serif;
			font-size: 22px;
			float: left;
			color: #fff;
			padding-right: 10px;
			text-decoration: none;
			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}
	}
`;

export const StyledDetailShowtimes = styled.div`
	margin: 20px auto;
	padding: 0 20px;
	max-width: 1280px;

	.showtimeContainer {
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
	.weekdays {
		border-bottom: 1px solid #ccc;
		display: grid;
		grid-template-columns: 10% 90%;

		.week {
			font-weight: 600;
			padding: 10px;
			border-left: 1px solid #ccc;
			display: flex;
			justify-content: space-around;
		}
	}
	.showtimesContent {
		display: grid;
		grid-template-columns: 10% 90%;

		.logoCinema {
			border-right: 1px solid #ccc;
			img {
				padding: 20px;
				width: 100%;
			}
		}
	}
`;
