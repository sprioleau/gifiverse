import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import debounce from "lodash.debounce";
import youtubeSearch from "./api/youtube-api";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
		};

		this.search = debounce(this.search, 300);

		youtubeSearch("pixar").then((videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0],
			});
		});
	}

	search = (text) => {
		youtubeSearch(text).then((videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0],
			});
		});
	};

	render() {
		return (
			<div className="app">
				<SearchBar onSearchChange={this.search} />
				<div id="video-section">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("main"));
