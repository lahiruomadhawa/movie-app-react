import axios from 'axios';
import { Movie, CreateMovieRequest, UpdateMovieRequest } from '../types/Movie';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const movieService = {
  async getAllMovies(): Promise<Movie[]> {
    const response = await apiClient.get<Movie[]>('/movies');
    return response.data;
  },

  async getMovieById(id: number): Promise<Movie> {
    const response = await apiClient.get<Movie>(`/movies/${id}`);
    return response.data;
  },

  async createMovie(movie: CreateMovieRequest): Promise<Movie> {
    const response = await apiClient.post<Movie>('/movies', movie);
    return response.data;
  },

  async updateMovie(id: number, movie: UpdateMovieRequest): Promise<Movie> {
    const response = await apiClient.put<Movie>(`/movies/${id}`, movie);
    return response.data;
  },

  async deleteMovie(id: number): Promise<void> {
    await apiClient.delete(`/movies/${id}`);
  },
};