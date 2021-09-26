import types from "../types";

const initialState = {
	searchTerm: "",
	gifs: [],
	selectedGif: {},
};

const gifsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_SEARCH_TERM: {
			return {
				...state,
				searchTerm: action.searchTerm,
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
