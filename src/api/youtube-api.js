import axios from "axios";

const API_URL = "https://www.googleapis.com/youtube/v3/search";

const youtubeSearch = (term) => {
	const params = {
		part: "snippet",
		key: process.env.REACT_APP_API_KEY,
		q: term,
		type: "video",
	};

	return new Promise((resolve, reject) => {
		axios
			.get(API_URL, { params })
			.then((response) => {
				resolve(response.data.items);
			})
			.catch((error) => {
				console.log(`youtube api error: ${error}`);
				reject(error);
			});
	});
};

export default youtubeSearch;
