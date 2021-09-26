import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GifListItem from "./GifListItem";
import { selectGifs, selectIsFetchingData } from "../store/selectors";
import { setSelectedGif } from "../store/actions";

const GifList = () => {
	const dispatch = useDispatch();
	const gifs = useSelector(selectGifs);
	const isFetchingData = useSelector(selectIsFetchingData);

	if (gifs?.length === 0 && isFetchingData) return <h2>Loading...</h2>;
	if (gifs?.length === 0) return <h2>Sorry, no goodies for your search term.</h2>;

	const onGifSelect = (userSelectedGif) => {
		dispatch(setSelectedGif(userSelectedGif));
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<ul className="gifs__gif-list" data-c-gif-list>
			{gifs.map((gif) => (
				<GifListItem onGifSelect={onGifSelect} key={gif.id} gif={gif} />
			))}
		</ul>
	);
};

export default GifList;
