import React, { useEffect } from "react";
import { StyledProfile } from "../../styles/StyledProfile";
import profile from "../../component/images/profile.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../redux/actions/userAction";
import { Row, Col } from "antd";
import NoImg from "../../component/images/no_image.jpg";

function Profile() {
	let user = useSelector((state) => state.userReducer.nguoiDung);
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(profileAction());
	}, []);

	let userprofile = useSelector((state) => state.userReducer.userProfile);

	return (
		<StyledProfile>
			<div className="backgroundProfile">
				<img src={profile} alt="background" />
			</div>
			<div className="profileContent">
				<Tabs>
					<TabList>
						<Tab>
							<h3>Thông tin cá nhân</h3>
						</Tab>
						<Tab>
							<h3>Lịch sử đặt vé</h3>
						</Tab>
					</TabList>
					<TabPanel>
						<Row>
							<Col span={6} className="colLeftProfile">
								<p className="profileTitle">Họ tên:</p>
								<p className="profileTitle">Email:</p>
								<p className="profileTitle">Tài khoản:</p>
								<p className="profileTitle">Mật khẩu:</p>
								<p className="profileTitle">Số điện thoại:</p>
								<p className="profileTitle">Mã nhóm:</p>
								<p className="profileTitle">Mã loại người dùng:</p>
							</Col>
							<Col span={18} className="colRightProfile">
								<p>...</p>
								<p>...</p>
								<p>...</p>
								<p>...</p>
								<p>...</p>
								<p>...</p>
								<p>...</p>
								<button>Cập nhật</button>
							</Col>
						</Row>
					</TabPanel>
					<TabPanel>
						<Row className="rowHistory">
							<Col span={4} className="colLeftHistory">
								<img src={NoImg} alt="altHistory" />
							</Col>
							<Col span={20} className="colRightHistory">
								<div>
									<span className="titleHistory">Rạp:</span>
									<span>...</span>
								</div>
								<div>
									<span className="titleHistory">Địa chỉ:</span>
									<span>...</span>
								</div>
								<div>
									<span className="titleHistory">Chi tiết:</span>
									<span>...</span>
								</div>
							</Col>
						</Row>
					</TabPanel>
				</Tabs>
			</div>
		</StyledProfile>
	);
}

export default Profile;
