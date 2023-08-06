import axios from "axios";
import { FAKE_MOVIE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class MovieAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}movie/popular${API_KEY_PARAM}`
    );
    return response.data.results;
    //return FAKE_MOVIE_POPULARS;
  }

  static async fetchRecommendations(movieId) {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
    //return FAKE_RECOMMENDATIONS;
  }
}
