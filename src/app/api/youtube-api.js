import axios from "axios";

const API_URL = "https://www.googleapis.com/youtube/v3/search";

const youtubeSearch = (term) => {
	const params = {
		part: "snippet",
		key: process.env.REACT_APP_API_KEY,
		q: term,
		type: "video",
		maxResults: 10,
		safeSearch: "moderate",
	};

	return new Promise((resolve, reject) => {
		axios
			.get(API_URL, { params })
			.then((response) => {
				resolve(response.data.items);
				console.log("response.data:", response.data);
			})
			.catch((error) => {
				console.log(`youtube api error: ${error}`);
				reject(error);
			});
	});
};

export default youtubeSearch;
