import React from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { searchGiphy, updateSearchTerm } from "../store/actions";
import { selectSearchTerm } from "../store/selectors";
import { API_ENDPOINTS } from "../constants";

const Search = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector(selectSearchTerm);

	const onSearchTermChange = (e) => {
		dispatch(updateSearchTerm(e.target.value));
		dispatch(debounce(searchGiphy(e.target.value, API_ENDPOINTS.GIFS), 300));
	};

	return (
		<div className="search">
			<input
				className="search__search-field"
				placeholder="Search for a gif..."
				data-c-search-input
				onChange={onSearchTermChange}
				value={searchTerm}
			/>
		</div>
	);
};
export default Search;
