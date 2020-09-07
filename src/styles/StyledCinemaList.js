import styled from "styled-components";

export const StyledCinemaContainer = styled.div`
	margin: 30px auto;
	max-width: 1280px;
	min-height: 607px;
	padding: 0 20px;

	.cinemaContentTabs {
		height: 100%;
		background: white;
		border-radius: 5px;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		display: grid;
		grid-template-columns: 10% 90%;

		.cinemaTabList {
			height: 100%;
			border-right: 1px solid #ccc;
		}

		.cinemaTabList .cinemaTab {
			padding: 20px;
			img {
				width: 100%;
			}
		}
		.cinemaTabPanel {
			.cinemaTabPanel_tabs {
				display: grid;
				grid-template-columns: 40% 60%;

				.cinemaTabPanel_tablist {
					border-right: 1px solid #ccc;
					height: 730px;
					.cinemaTabPanel_tab {
						padding: 20px;
						h3 {
							font-weight: 700;
						}
					}
				}

				.cinemaTabPanel_tabpanel {
					.tabpanelContent {
						padding: 10px;
						display: flex;
					}
					.imgTapanel {
						width: 30%;
						margin-right: 10px;
						img {
							border-radius: 5px;
							width: 100%;
						}
					}
					.titleTapanel {
					}
				}

				.selectScroll {
					// max-height: 300px;
					overflow-y: scroll;
				}

				.selectScroll::-webkit-scrollbar-track {
					border-radius: 7px;
				}

				.selectScroll::-webkit-scrollbar {
					width: 4px;
					background-color: #e8e3e3;
				}

				.selectScroll::-webkit-scrollbar-thumb {
					border-radius: 10px;
					-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
				}
			}
		}
	}
`;
