import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {

  const [isloading, setIsloading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>(true);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async() => {
    setIsloading(true)
    const fullMovie = await UseCases.getMovieByIdUseCase( movieDBFetcher , movieId)
    setMovie(fullMovie)
    setIsloading(false)
  };

  return {
    movie
  };
};
