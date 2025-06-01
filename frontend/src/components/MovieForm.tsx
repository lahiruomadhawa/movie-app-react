import React, { useState, useEffect } from 'react';
import { Movie, CreateMovieRequest, UpdateMovieRequest } from '../types/Movie';

interface MovieFormProps {
  movie?: Movie;
  onSubmit: (movie: CreateMovieRequest | UpdateMovieRequest) => Promise<void>;
  onCancel: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ movie, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<CreateMovieRequest>({
    name: '',
    category: '',
    director: '',
    description: '',
    poster: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (movie) {
      setFormData({
        name: movie.name,
        category: movie.category,
        director: movie.director,
        description: movie.description,
        poster: movie.poster,
      });
    }
  }, [movie]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {movie ? 'Edit Movie' : 'Add New Movie'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Movie Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="director" className="block text-sm font-medium text-gray-700 mb-1">
              Director *
            </label>
            <input
              type="text"
              id="director"
              name="director"
              value={formData.director}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="poster" className="block text-sm font-medium text-gray-700 mb-1">
              Poster URL *
            </label>
            <input
              type="url"
              id="poster"
              name="poster"
              value={formData.poster}
              onChange={handleInputChange}
              //required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-2 px-4 rounded-md transition-colors"
            >
              {loading ? 'Saving...' : (movie ? 'Update Movie' : 'Add Movie')}
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white py-2 px-4 rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;