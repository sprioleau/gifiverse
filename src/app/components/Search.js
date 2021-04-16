import React, { Component } from "react";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { searchterm: "" };
	}

	onInputChange = (e) => {
		this.props.onSearchChange(e.target.value);
		this.setState({ searchterm: e.target.value });
	};

	render() {
		return (
			<div className="search">
				<input
					className="search__search-field"
					placeholder="Search for a video..."
					onChange={this.onInputChange}
					value={this.state.searchterm}
				/>
			</div>
		);
	}
}

export default Search;
