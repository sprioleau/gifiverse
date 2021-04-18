import React, { Component } from "react";
import "./styles/style.scss";
import debounce from "lodash.debounce";
import youtubeSearch from "./api/youtube-api";

import Logo from "./components/Logo";
import Search from "./components/Search";
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
				videos: videos.slice(1), // Remove Featured video from VideoList
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
				<div className="search-wrapper">
					<Logo />
					<Search onSearchChange={this.search} />
				</div>
				<section className="videos">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
				</section>
			</div>
		);
	}
}

export default App;
