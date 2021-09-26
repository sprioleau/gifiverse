import "./styles/style.scss";

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Search from "./components/Search";
import GifDetail from "./components/GifDetail";
import GifList from "./components/GifList";
import { searchGiphy } from "./store/actions";
import { API_ENDPOINTS } from "./constants";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchGiphy("saturn", API_ENDPOINTS.GIFS));
	}, []);

	return (
		<div className="app">
			<header className="search-wrapper">
				<Logo />
				<Search />
			</header>
			<section className="gifs">
				<GifDetail />
				<GifList />
			</section>
			<Footer />
		</div>
	);
};

export default App;
