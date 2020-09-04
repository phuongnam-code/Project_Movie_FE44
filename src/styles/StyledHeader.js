import styled from "styled-components";

export const StyledGridHeader = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 20px;
	display: grid;
	grid-template-columns: 30% 40% 30%;

	.logoCybersoft {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		img {
			width: 75%;
		}
	}
`;

export const StyledLogoHeader = styled.div`
	padding: 10px 0;
	.logoHeader {
		display: flex;
		align-items: center;

		.logoMovie {
			img {
				width: 80px;
			}
		}

		.nameLogoHerder {
			// font-family: "Pacifico", cursive;
			// font-family: "Dancing Script", cursive;
			// font-family: "Architects Daughter", cursive;
			// font-family: "Caveat", cursive;
			font-family: "Satisfy", cursive;
			font-size: 35px;
			margin: 0;
			font-weight: 700;
			color: white;
			line-height: 40px;

			.logoStyle {
				color: #02a388;
				font-size: 40px;
				font-weight: 900;
			}
		}
	}
`;

export const StyledLinkHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	font-weight: 700;

	.linkItem {
		margin: 0 10px;
		color: white;
		:hover {
			color: #faad14;
		}
	}
`;
