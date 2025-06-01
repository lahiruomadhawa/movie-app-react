import React from 'react';
import { Movie } from '../types/Movie';
import NoImage from "../no_image.jpg"

interface MovieDetailModalProps {
  movie: Movie;
  onClose: () => void;
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
}

const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ 
  movie, 
  onClose, 
  onEdit, 
  onDelete 
}) => {
  const handleDeleteClick = (): void => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      onDelete(movie.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          <img
            src={movie.poster}
            alt={movie.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = NoImage;
            }}
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{movie.name}</h2>
          <div className="mb-4">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Director:</span> {movie.director}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Category:</span> {movie.category}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{movie.description}</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => onEdit(movie)}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Edit Movie
            </button>
            <button
              onClick={handleDeleteClick}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Delete Movie
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;