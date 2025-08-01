import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

let popularPageNumber = 1
let topRatedPageNumber = 1
let upcomingPageNumber = 1

export const useMovies = () => {


    const [isLoading, setIsLoading] = useState(false)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(() => {
        initialLoad()
    }, [])
    

    const initialLoad = async() => {

        const nowPlayingPromise = await UseCases.moviesNowPLayingUseCase( movieDBFetcher )
        const upComingPromise = await UseCases.moviesUpcomingUseCase( movieDBFetcher )
        const topRatedPromise = await UseCases.moviesPopularUseCase( movieDBFetcher )
        const popularPromise = await UseCases.moviesPopularUseCase( movieDBFetcher )

        const [
          nowPlayingMovies,
          upComingMovies,
          topRatedMovies,
          popularMovies
        ] = await Promise.all([
          nowPlayingPromise,
          upComingPromise,
          topRatedPromise,
          popularPromise
        ])

        setNowPlaying( nowPlayingMovies)
        setPopular( popularMovies)
        setUpcoming( upComingMovies)
        setTopRated( topRatedMovies)

    }


  return {
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    topRated,

    popularPage: async() => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber
      });
      setPopular( prev => [...prev, ...popularMovies])
    },
    topRatedPage: async() => {
      topRatedPageNumber++;
      const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, {
        page: topRatedPageNumber
      });
      setTopRated( prev => [...prev, ...topRatedMovies])
    },
    upcomingPage: async() => {
      upcomingPageNumber++;
      const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher, {
        page: upcomingPageNumber
      });
      setUpcoming( prev => [...prev, ...upcomingMovies])
    },
  }
}
