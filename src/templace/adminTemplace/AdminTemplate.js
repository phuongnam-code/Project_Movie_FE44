import React from "react";
import { Route } from "react-router-dom";
import Content from "./ContentAdmin";
import Header from "./HeaderAdmin";
import { StyleAdminPage } from "../../styles/StyledAdmintemplate";

const AdminComponent = (props) => {
	return (
		<StyleAdminPage>
			<Header />
			<Content />
		</StyleAdminPage>
	);
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
