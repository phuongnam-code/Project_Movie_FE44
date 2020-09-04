import React, { Fragment } from "react";
import { Route } from "react-router-dom";

const AdminComponent = (props) => {
	return <Fragment></Fragment>;
};

export const AdminTemplate = ({ Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<AdminComponent>
						<Component {...props} />
					</AdminComponent>
				);
			}}
		/>
	);
};
