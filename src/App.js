import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HomeTemplate } from "./templace/homeTemplace/HomeTemplate";
import { AdminTemplate } from "./templace/adminTemplace/AdminTemplate";

import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Detail from "./page/detail/Detail";
import Profile from "./page/profile/Profile";
import { StyledGlobal } from "./styles/StyledGlobal";
import BookingTicket from "./page/bookingticket/BookingTicket";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<StyledGlobal />
				<HomeTemplate exact path="/" Component={Home} />
				<HomeTemplate exact path="/login" Component={Login} />
				<HomeTemplate exact path="/profile" Component={Profile} />
				<HomeTemplate exact path="/detail/:maPhim" Component={Detail} />
				<HomeTemplate exact path="/bookingticket/:maPhim" Component={BookingTicket} />
				<AdminTemplate />
			</div>
		</BrowserRouter>
	);
}

export default App;
