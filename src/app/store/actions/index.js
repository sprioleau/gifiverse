import youtubeSearch from "../../api/youtube-api";
import types from "../types";

export const updateSearchTerm = (searchTerm) => ({
	type: types.UPDATE_SEARCH_TERM,
	searchTerm,
});

export const setVideos = (videos) => ({
	type: types.SET_VIDEOS,
	videos,
});

export const setSelectedVideo = (video) => ({
	type: types.SET_SELECTED_VIDEO,
	video,
});

export const loadVideos = (searchTerm) => {
	return async (dispatch) => {
		const videosFromApi = await youtubeSearch(searchTerm);
		dispatch(setVideos(videosFromApi));
	};
};
