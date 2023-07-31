import axios from "axios";
import { FAKE_MOVIE_POPULARS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class MovieAPI {
  static async fetchPopulars() {
    //const response = await axios.get(
    //  `${BASE_URL}movie/popular${API_KEY_PARAM}`
    //);
    //console.log(response.data.results);
    //return response.data.results;
    return FAKE_MOVIE_POPULARS;
  }
}
