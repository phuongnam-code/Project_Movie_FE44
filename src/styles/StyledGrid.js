import styled from "styled-components";

export const StyledGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 20px;
	h1 {
		font-weight: 700;
		font-size: 40px;
		@media screen and (max-width: 768px) {
			font-size: 22px;
		}
	}
`;

export const StyledGridContent = styled.div`
	text-align: center;
	display: grid;
	grid-template-columns: repeat(4, minmax(100px, 1fr));
	grid-gap: 30px;
	position: relative;
	.grid-element {
		animation: animateGrid 0.5s;
	}
	@keyframes animateGrid {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(4, minmax(100px, 1fr));
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, minmax(100px, 1fr));
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(2, minmax(100px, 1fr));
	}
	@media screen and (max-width: 375px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const StyledGridMovieItem = styled.div`
	img {
		width: 100%;
		height: auto;
		/* max-height: 350px; */
		transition: all 0.3s;
		object-fit: cover;
		border-radius: 20px;
		:hover {
			opacity: 0.8;
		}
		/* @media screen and (max-width: 1024px) {
      		height: 300px;
    	}
		@media screen and (max-width: 768px) {
			height: 350px;
		}
		@media screen and (max-width: 600px) {
			max-height: 300px;
		}
		@media screen and (max-width: 375px) {
			max-height: 450px;
		} */
		.clickable {
			cursor: pointer;
		}
	}
`;

export const StyledLoadMoreBtn = styled.button`
	background: #000;
	width: 25%;
	min-width: 200px;
	height: 70px;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s;
	border-radius: 40px;
	font-family: "Abel", sans-serif;
	font-size: 28px;
	max-width: 1280px;
	display: block;
	margin: 20px auto;
	padding: 0 20px;
	outline: none;
	:hover {
		opacity: 0.8;
	}
`;
