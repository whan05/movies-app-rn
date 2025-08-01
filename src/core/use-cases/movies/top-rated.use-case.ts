import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}


export const moviesTopRatedUseCase = async ( fetcher : HttpAdapter, options?: Options):Promise<Movie[]> => {

    try {
        
        const topRated = await fetcher.get<GeneralMoviesResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 10
            }
        })

        return topRated.results.map( MovieMapper.fromMovieDBResultToEntity )


    } catch (error) {
        console.log(error)
        throw new Error("Error fetching movies - Top Rated")
    }
}

