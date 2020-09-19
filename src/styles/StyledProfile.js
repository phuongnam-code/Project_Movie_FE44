import styled from "styled-components";

export const StyledProfile = styled.div`
	width: 80%;
	margin: auto;
	.backgroundProfile {
		// height: 20vh;
		img {
			width: 100%;
			// height: 300px;
		}
	}
	.profileContent {
		margin-top: 20px;
		.react-tabs__tab-list {
			border: none;
		}
		.react-tabs__tab {
			outline: none;
			border: none;
			font-size: 16px;
			margin-right: 5px;
		}
		.react-tabs__tab--selected {
			border-radius: 10px;
			h3 {
				color: blue;
			}
		}

		// chi tiết người dùng
		.colLeftProfile,
		.colRightProfile {
			padding: 20px;
			p {
				margin-bottom: 10px;
			}
		}
		.colLeftProfile {
			p.profileTitle {
				font-weight: 600;
			}
		}

		// lịch sử đặt vé
		.rowHistory {
			padding: 20px;
			.colLeftHistory {
				img {
					width: 150px;
					border-radius: 5px;
				}
			}
			.colRightHistory {
				span.titleHistory {
					width: 100px;
					display: inline-block;
				}
			}
		}
	}
`;
