import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import debounce from "lodash.debounce";
import youtubeSearch from "./api/youtube-api";

import Logo from "./components/Logo";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const search = (text) => {
		youtubeSearch(text).then((videosFromApi) => {
			setVideos(videosFromApi.slice(1));
			setSelectedVideo(videosFromApi[0]);
		});
	};

	const debouncedSearch = debounce(search, 300);

	const onVideoSelect = (userSelectedVideo) => {
		setSelectedVideo(userSelectedVideo);
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	useEffect(() => {
		youtubeSearch("pixar").then((videosFromApi) => {
			setVideos(videosFromApi.slice(1));
			setSelectedVideo(videosFromApi[0]);
		});
	}, []);

	return (
		<div className="app">
			<header className="search-wrapper">
				<Logo />
				<Search onSearchChange={debouncedSearch} />
			</header>
			<section className="videos">
				<VideoDetail video={selectedVideo} />
				<VideoList onVideoSelect={onVideoSelect} videos={videos} />
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
};

export default App;
