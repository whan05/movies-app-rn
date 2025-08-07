import { THE_MOVIE_BD_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '7ea0c0868159cd4a3c21aafb91464058',
        api_key: THE_MOVIE_BD_KEY ?? "No key",
        language: 'es'
    }
})