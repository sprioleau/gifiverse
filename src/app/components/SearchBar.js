import React, { Component } from "react";

class SearchBar extends Component {
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
			<div id="search-bar">
				<input onChange={this.onInputChange} value={this.state.searchterm} />;
			</div>
		);
	}
}

export default SearchBar;
