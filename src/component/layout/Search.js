import React, { useState, useRef } from "react";
import { StyledSearch, StyledSearchContent } from "../styles/StyledSeacrh";
import FontAwesome from "react-fontawesome";

function Search({ callback }) {
	const [searchValue, setSearchValue] = useState("");
	const timeOut = useRef(null);

	const handleChanges = (event) => {
		const { value } = event.target;

		clearTimeout(timeOut.current);
		setSearchValue(value);
		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};

	return (
		<StyledSearch>
			<StyledSearchContent>
				<FontAwesome className="fa-search" name="search" size="2x" style={{ color: "red" }} />
				<input type="text" placeholder="Search Movie" value={searchValue} onChange={handleChanges} />
			</StyledSearchContent>
		</StyledSearch>
	);
}

export default Search;
