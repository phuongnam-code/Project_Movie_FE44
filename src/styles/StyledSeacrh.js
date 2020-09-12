import styled from "styled-components";

export const StyledSearch = styled.div`
	width: 100%;
	// height: 105px;
	// background: #b4b4b2;
	padding: 10px 10px 10px 10px;
	box-sizing: border-box;
	color: #fff;
`;

export const StyledSearchContent = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 55px;
	background: #fff;
	margin: 0 auto;
	border-radius: 40px;
	position: relative;
	color: #fff;

	.searchIcon {
		position: absolute;
		left: 20px;
		top: 15px;
		color: red;
		z-index: 10000;
		font-size: 30px;
	}

	input {
		font-size: 28px;
		position: absolute;
		left: 0px;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: black;
		box-sizing: border-box;
		:focus {
			outline: none;
		}

		@media screen and (max-width: 720px) {
			font-size: 28px;
		}
	}
`;
