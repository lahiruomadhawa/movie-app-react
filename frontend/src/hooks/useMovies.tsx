import { useState, useEffect, useCallback } from 'react';
import { Movie, CreateMovieRequest, UpdateMovieRequest } from '../types/Movie';
import { movieService } from '../services/MovieApi';

interface UseMoviesReturn {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  createMovie: (movie: CreateMovieRequest) => Promise<void>;
  updateMovie: (id: number, movie: UpdateMovieRequest) => Promise<void>;
  deleteMovie: (id: number) => Promise<void>;
}

export const useMovies = (): UseMoviesReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const moviesData = await movieService.getAllMovies();
      setMovies(moviesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  // const fetchMovies = useCallback(async (): Promise<void> => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const moviesData = await movieService.getAllMovies();
  //     setMovies(moviesData);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'Failed to fetch movies');
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []); // Empty dependency array since this function doesn't depend on any props or state

  const createMovie = async (movie: CreateMovieRequest): Promise<void> => {
    try {
      setError(null);
      const newMovie = await movieService.createMovie(movie);
      setMovies(prev => [...prev, newMovie]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create movie');
      throw err;
    }
  };

  const updateMovie = async (id: number, movie: UpdateMovieRequest): Promise<void> => {
    try {
      setError(null);
      const updatedMovie = await movieService.updateMovie(id, movie);
      setMovies(prev => prev.map(m => m.id === id ? updatedMovie : m));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update movie');
      throw err;
    }
  };

  const deleteMovie = async (id: number): Promise<void> => {
    try {
      setError(null);
      await movieService.deleteMovie(id);
      setMovies(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete movie');
      throw err;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   fetchMovies();
  // }, [fetchMovies]);

  return {
    movies,
    loading,
    error,
    fetchMovies,
    createMovie,
    updateMovie,
    deleteMovie,
  };
};