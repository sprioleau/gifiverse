import types from "../types";

const initialState = {
	searchTerm: "",
	videos: [],
	selectedVideo: {},
};

const VideosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_SEARCH_TERM: {
			return { ...state, searchTerm: action.searchTerm };
		}

		case types.SET_VIDEOS: {
			const newVideos = [...action.videos];
			return {
				...state,
				videos: newVideos.slice(1),
				selectedVideo: newVideos[0],
			};
		}

		case types.SET_SELECTED_VIDEO: {
			const { video } = action;
			return { ...state, selectedVideo: video };
		}

		default:
			return state;
	}
};

export default VideosReducer;
