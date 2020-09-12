import styled from "styled-components";

export const StyledBookingTicketContainer = styled.div`
	display: flex;

	.chooseChair {
		width: 70%;
		margin: 0 auto;
		max-width: 940px;

		.divLogo {
			padding: 20px;
			display: flex;
			justify-content: space-between;
			.logo {
				width: 80%;
				display: flex;
				align-items: center;

				h3 {
					font-weight: 600;
				}
				img {
					width: 100px;
					margin-right: 10px;
				}
			}
			.chairHoldTime {
				text-align: center;
				h1 {
					color: red;
				}
			}
		}

		.divChair {
			.screen {
				padding: 10px;
				padding-bottom: 0;
				width: 90%;
				margin: auto;
				img {
					width: 100%;
				}
			}
			.listChair {
				margin: auto;
				width: 85%;
				text-align: center;
			}
		}
		.divChairType {
			width: 90%;
			margin: auto;
			padding: 20px;
			display: flex;
			justify-content: space-evenly;
			.chair {
				text-align: center;
			}
		}

		.ghe {
			margin: 5px;
			cursor: pointer;
		}

		.gheDaDat {
			color: red !important;
			cursor: no-drop !important;
		}

		.gheVip {
			color: rgb(231, 97, 2);
		}

		.gheDangDat {
			color: rgb(8, 187, 8);
		}
	}
	.pay {
		border-left: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		width: 30%;
		padding: 0 10px;
		.rightCheckout {
			border-bottom: 1px dashed #beb4b4;
			margin: 20px 0;
		}
		.giaTien {
			text-align: center;
			h1 {
				margin: 0;
				font-size: 40px;
				color: #44c020;
				font-weight: 600;
			}
		}
		.thongTinPhim {
			.space {
				margin: 0 15px;
			}
			.colorXuatChieu {
				color: blue;
			}
		}
		.email,
		.phone,
		.maGiamGia {
			input {
				background: inherit;
				border: none;
			}
			input:focus {
				outline: none;
			}
		}
		.maGiamGia {
			display: flex;
			justify-content: space-between;
			button {
				margin-bottom: 5px;
				border-radius: 5px;
				background: green;
				color: white;
			}
		}
		.datVe {
			padding-top: 20px;
			.btnDatVe {
				width: 100%;
				font-size: 30px;
				background: red;
				padding: 10px;
				color: white;
				border-radius: 5px;
				border: none;
				cursor: pointer;
			}
		}
	}
`;
