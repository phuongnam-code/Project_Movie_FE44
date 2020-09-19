import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
	width: 100vw;
	height: 85vh;
	position: relative;

	.registerContent {
		top: 25%;
		left: 50%;
		transform: translate(-50%, -25%);
		position: absolute;
		width: 50%;
		height: 80vh;

		margin: auto;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		// background-image: linear-gradient(to bottom, rgb(71 108 162 / 90%), rgb(51 92 168 / 90%));
		padding: 20px;

		.divImg {
			text-align: center;
			img {
				width: 130px;
				border-radius: 50%;
			}
		}
		.registerTitle {
			text-align: center;
			h1 {
				font-weight: 700;
			}
		}
		.colConfig {
			p {
				margin: 5px 0 40px 0;
			}
		}
		.divUserregister {
			// margin-bottom: 20px;
			padding: 0 10px;
			span {
				color: #bf1650;
			}

			span::before {
				content: "⚠ ";
			}

			input {
				display: block;
				box-sizing: border-box;
				width: 100%;
				border-radius: 4px;
				border: 1px solid white;
				padding: 10px 15px;
				margin-bottom: 10px;
				font-size: 14px;
				:focus {
					outline: none;
				}
			}

			label {
				line-height: 2;
				display: block;
				margin-top: 15px;
				font-size: 14px;
				font-weight: 200;
			}

			.slType {
				margin-top: 5px;
				padding: 3px;
				border: none;
				outline: none;
				option {
					border: none;
				}
			}
			.maLoaiNguoiDung {
				display: inline;
				margin-right: 5px;
			}
		}

		.btnDangKy {
			margin-top: 20px;
			text-align: center;

			button {
				font-size: 20px;
				color: white;
				border: none;
				border-radius: 5px;
				padding: 15px 20px;
				width: 40%;
				background: #02a388;
			}
		}
	}
`;
