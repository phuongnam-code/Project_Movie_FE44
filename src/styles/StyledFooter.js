import styled from "styled-components";

export const StyledFooter = styled.div`
	color: white !important;
	background: #707070;
	a:hover {
		color: orange;
		font-size: 22px;
		transition: all 0.3s;
	}
`;

export const StyledFooterContent = styled.div`
	padding: 50px 20px 70px 20px;
	background: #707070;
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 25% 45% 30%;
	a {
		color: white;
	}

	img {
		width: 40px;
		margin-right: 10px;
	}
	h3 {
		font-weight: 600;
	}
`;

export const StyledFooterDesign = styled.div`
	text-align: center;
	background: #02a388;
	padding: 10px;
	letter-spacing: 1px;
	h4 {
		margin: 0;
		color: white;
	}
	a {
		color: #0c0d0d;
		font-weight: 600;
		font-size: 22px;
	}
`;
