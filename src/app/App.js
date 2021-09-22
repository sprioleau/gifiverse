import "./styles/style.scss";

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Search from "./components/Search";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import { loadVideos } from "./store/actions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadVideos("pixar"));
	}, []);

	return (
		<div className="app">
			<header className="search-wrapper">
				<Logo />
				<Search />
			</header>
			<section className="videos">
				<VideoDetail />
				<VideoList />
			</section>
			<Footer />
		</div>
	);
};

export default App;
