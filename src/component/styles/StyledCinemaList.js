import styled from "styled-components";

export const StyledCinemaContainer = styled.div`
	margin: 30px auto;
	max-width: 1280px;
	padding: 0 20px;

	.cinemaContentTabs {
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		display: grid;
		grid-template-columns: 10% 90%;

		.cinemaTabList .cinemaTab {
			padding: 20px;
			border-right: 1px solid #ccc;
			// border-bottom: 1px solid #ccc;
			img {
				width: 100%;
			}
		}
		.cinemaTabPanel .cinemaTabPanelContent {
			height: 100%;
			display: grid;
			grid-template-columns: 40% 60%;
		}

		.cinemaTabPanel {
		}
	}
`;
