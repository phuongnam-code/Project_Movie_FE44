import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../component/layout/Header";

const HomeComponent = (props) => {
	return (
		<Fragment>
			<Header />
			{props.children}
		</Fragment>
	);
};
export const HomeTemplate = ({ Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<HomeComponent>
						<Component {...props} />
					</HomeComponent>
				);
			}}
		/>
	);
};
