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

	onVideoSelect = (selectedVideo) => {
		this.setState({ selectedVideo });
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	render() {
		return (
			<div className="app">
				<header className="search-wrapper">
					<Logo />
					<Search onSearchChange={this.search} />
				</header>
				<section className="videos">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
				</section>
				<footer className="footer">
					Created by{" "}
					<a href="https://github.com/sprioleau" className="footer__link">
						San&apos;Quan Prioleau
					</a>{" "}
					for{" "}
					<a href="https://cs52.me/assignments/sa/react-videos/" className="footer__link">
						CS52
					</a>
					.
				</footer>
			</div>
		);
	}
}

export default App;
