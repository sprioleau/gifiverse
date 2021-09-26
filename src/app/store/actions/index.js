import searchGiphyApi from "../../api/searchGiphy";
import types from "../types";

export const updateSearchTerm = (searchTerm) => ({
	type: types.UPDATE_SEARCH_TERM,
	searchTerm,
});

export const setGifs = (gifs) => ({
	type: types.SET_GIFS,
	gifs,
});

export const setSelectedGif = (gif) => ({
	type: types.SET_SELECTED_GIF,
	gif,
});

export const setIsFetchingData = (isFetchingData) => ({
	type: types.SET_IS_FETCHING_DATA,
	isFetchingData,
});

export const searchGiphy = (searchTerm, endpoint) => {
	return async (dispatch) => {
		dispatch(setIsFetchingData(true));
		const { data: gifs } = await searchGiphyApi(searchTerm, endpoint);
		dispatch(setGifs(gifs));
		dispatch(setIsFetchingData(false));
	};
};
