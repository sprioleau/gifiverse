import types from "../types";

const initialState = {
	searchTerm: "",
	gifs: [],
	selectedGif: {},
	isFetchingData: false,
};

const gifsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_SEARCH_TERM: {
			const { searchTerm, fallbackSearchTerm } = action;

			const searchTermForApi = searchTerm.length > 0 ? searchTerm : fallbackSearchTerm;

			return {
				...state,
				searchTerm: searchTermForApi,
			};
		}

		case types.SET_GIFS: {
			const newGifs = [...action.gifs];
			return {
				...state,
				gifs: newGifs.slice(1),
				selectedGif: newGifs[0],
			};
		}

		case types.SET_IS_FETCHING_DATA: {
			const { isFetchingData } = action;
			return {
				...state,
				isFetchingData,
			};
		}

		case types.SET_SELECTED_GIF: {
			const { gif } = action;
			return {
				...state,
				selectedGif: gif,
			};
		}

		default:
			return state;
	}
};

export default gifsReducer;
