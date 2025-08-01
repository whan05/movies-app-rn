import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}


export const moviesUpcomingUseCase = async ( fetcher : HttpAdapter, options?: Options):Promise<Movie[]> => {

    try {
        
        const upcoming = await fetcher.get<GeneralMoviesResponse>('/upcoming' , {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit ?? 10
            }
        })

        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity )


    } catch (error) {
        console.log(error)
        throw new Error("Error fetching movies - Upcoming")
    }
}

