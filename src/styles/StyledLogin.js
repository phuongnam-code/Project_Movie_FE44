import styled from "styled-components";

export const StyledLoginContainer = styled.div`
	width: 100vw;
	height: 85vh;
	position: relative;

	.loginContent {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
		width: 30%;
		height: 65vh;

		margin: auto;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		// background-image: linear-gradient(to bottom, rgb(71 108 162 / 90%), rgb(51 92 168 / 90%));
		padding: 20px;

		.divImg {
			text-align: center;
			margin: 20px 0;
			img {
				width: 130px;
				border-radius: 50%;
			}
		}
		.loginTitle {
			text-align: center;
			h1 {
				font-weight: 700;
			}
		}
		.divUserLogin,
		.divPassLogin {
			margin-bottom: 20px;
			input {
				width: 100%;
				border: none;
				border-radius: 5px;
			}
			input:focus {
				outline: none;
			}
		}
		.rePassword {
			small {
				margin-right: 20px;
			}
		}
		.btnDangNhap {
			margin-top: 30px;
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
