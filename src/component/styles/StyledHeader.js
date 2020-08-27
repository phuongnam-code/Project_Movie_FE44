import styled from "styled-components";

export const StyledGridHeader = styled.div`
	width: 80%;
	margin: auto;
	display: grid;
	grid-template-columns: 30% 70%;
`;

export const StyledLogoHeader = styled.div`
	.logoHeader {
		font-size: 40px;
		margin: 0;
		font-weight: 700;
		color: white;
		span {
			color: #02a388;
			font-size: 45px;
			font-weight: 900;
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
