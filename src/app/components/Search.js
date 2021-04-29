import React from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { loadVideos, updateSearchTerm } from "../store/actions";
import { selectSearchTerm } from "../store/selectors";

const Search = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector(selectSearchTerm);

	const onSearchTermChange = (e) => {
		dispatch(updateSearchTerm(e.target.value));
		dispatch(debounce(loadVideos(e.target.value), 1000));
	};

	return (
		<div className="search">
			<input
				className="search__search-field"
				placeholder="Search for a video..."
				onChange={onSearchTermChange}
				value={searchTerm}
			/>
		</div>
	);
};
export default Search;
