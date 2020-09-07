import React, { useState, useRef } from "react";
import { StyledSearch, StyledSearchContent } from "../../styles/StyledSeacrh";

function Search({ callback }) {
	const [searchValue, setSearchValue] = useState("");
	const timeOut = useRef(null);

	const handleChanges = (event) => {
		const { value } = event.target;

		clearTimeout(timeOut.current);
		setSearchValue(value);
		timeOut.current = setTimeout(() => {
			callback(value.trim());
		}, 500);
	};

	return (
		<StyledSearch>
			<StyledSearchContent>
				<input type="text" placeholder="Search Movie" value={searchValue} onChange={handleChanges} />
			</StyledSearchContent>
		</StyledSearch>
	);
}

export default Search;
