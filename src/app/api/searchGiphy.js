import axios from "axios";
import constructUrlQuery from "../utils/constructUrlQuery";
import { API_BASE_URL } from "../constants/index";

const apiDefaultParameters = {
  api_key: process.env.REACT_APP_GIPHY_API_KEY,
  limit: 10,
  lang: "en",
  rating: "pg",
};

const searchGiphyApi = async (searchTerm, endpoint) => {
  const cleanedSearchTerm = searchTerm.length > 0
    ? searchTerm.trim().split(" ").join("+")
    : "baby+yoda";

  const parameters = { ...apiDefaultParameters, q: cleanedSearchTerm };
  const url = constructUrlQuery(API_BASE_URL, endpoint, parameters);

  const inDevelopment = process.env.NODE_ENV === "development";

  const data = inDevelopment
    ? await axios.get("/data/gifs.json") // Helps not to exceed API request limit
    : await axios.get(url);

  const { data: gifs } = data;

  return gifs;
};

export default searchGiphyApi;
