import styled from "styled-components";

export const StyleAdminPage = styled.div`
	.headerAdmin {
		// height: 15%;
		background: rgb(180, 180, 178);
		padding: 0 20px;
		// padding-left: 15%;
		display: flex;
		align-items: center;

		.headerAdmin_left {
			width: 80%;
		}
		.headerAdmin_right {
			width: 20%;
			text-align: right;
			img {
				width: 50px;
				border-radius: 50%;
			}
		}
	}
	.contentAdmin {
		display: flex;
		.contentAdmin_left {
			h1.titleAdmin {
				text-align: center;
				font-weight: 800;
				border-bottom: 1px solid black;
			}
			width: 20%;
			border-right: 1px solid black;
			padding: 15px;

			.react-tabs__tab {
				width: 100%;
				border: none;
				border-radius: 10px;
			}
		}
		.contentAdmin_right {
			width: 80%;
			// background: white;
			padding: 20px;

			.react-tabs__tab-panel,
			.react-tabs__tab-panel--selected {
				border-radius: 5px;
				height: 100%;
				// background: white;
			}
			.searchMovie,
			.searchUser {
				margin: 20px 0;
				.inputSearch {
					width: 70%;
					border-radius: 5px;
				}
			}
		}
	}
`;
