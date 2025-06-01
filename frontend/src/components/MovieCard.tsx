import React from 'react';
import { Movie } from '../types/Movie';
import NoImage from "../no_image.jpg"

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
  onView: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onEdit, onDelete, onView }) => {
  const handleDeleteClick = (): void => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      onDelete(movie.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={movie.poster && movie.poster.trim() ? movie.poster : NoImage}
        alt={movie.name}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => onView(movie)}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // target.src = 'https://via.placeholder.com/300x400?text=No+Image';
          target.src = NoImage;
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600" 
            onClick={() => onView(movie)}>
          {movie.name}
        </h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Director:</span> {movie.director}
        </p>
        <p className="text-gray-600 mb-3">
          <span className="font-medium">Category:</span> {movie.category}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {movie.description}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(movie)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;