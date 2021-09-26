import { combineReducers } from "redux";
import gifReducer from "./gifs.reducer";

const rootReducer = combineReducers({
	gifs: gifReducer,
});

export default rootReducer;
