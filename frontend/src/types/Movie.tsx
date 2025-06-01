export interface Movie {
  id: number;
  name: string;
  category: string;
  director: string;
  description: string;
  poster: string;
}

export interface CreateMovieRequest {
  name: string;
  category: string;
  director: string;
  description: string;
  poster: string;
}

export interface UpdateMovieRequest {
  name: string;
  category: string;
  director: string;
  description: string;
  poster: string;
}

export interface ApiError {
  message: string;
  details?: string;
}