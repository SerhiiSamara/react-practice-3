import axios from "axios";
axios.defaults.baseURL='https://api.themoviedb.org/3/';
const KEY = 'e145377b3a98d62607e7dc90339d279b';

export const fetchMovies = async (page) => {
	return axios('trending/movie/day', {params:{api_key:KEY, page}})
}