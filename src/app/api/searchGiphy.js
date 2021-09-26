import axios from "axios";
import staticGifsData from "../data/gifs";
import constructUrlQuery from "../utils/constructUrlQuery";
import { API_BASE_URL } from "../constants/index";

const apiDefaultParameters = {
  api_key: process.env.REACT_APP_GIPHY_API_KEY,
  limit: 10,
  lang: "en",
  rating: "pg",
};

const searchGiphyApi = async (searchTerm, endpoint) => {
  const parameters = { ...apiDefaultParameters, q: searchTerm };
  const url = constructUrlQuery(API_BASE_URL, endpoint, parameters);

  const inDevelopment = process.env.NODE_ENV === "development";

  const data = inDevelopment ? staticGifsData : await axios.get(url);

  const { data: gifs } = data;
  console.log("gifs:", gifs);

  return gifs;
};

export default searchGiphyApi;
