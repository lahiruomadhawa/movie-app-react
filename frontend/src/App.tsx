import React, { useState } from 'react';
import { Movie } from './types/Movie';
import { useMovies } from './hooks/useMovies';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieForm from './components/MovieForm';
import MovieDetailModal from './components/MovieDetailModal';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

type ModalType = 'add' | 'edit' | 'view' | null;

const App: React.FC = () => {
  const { movies, loading, error, createMovie, updateMovie, deleteMovie, fetchMovies } = useMovies();
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleAddMovie = (): void => {
    setSelectedMovie(null);
    setModalType('add');
  };

  const handleEditMovie = (movie: Movie): void => {
    setSelectedMovie(movie);
    setModalType('edit');
  };

  const handleViewMovie = (movie: Movie): void => {
    setSelectedMovie(movie);
    setModalType('view');
  };

  const handleCloseModal = (): void => {
    setModalType(null);
    setSelectedMovie(null);
  };

  const handleFormSubmit = async (movieData: any): Promise<void> => {
    try {
      if (modalType === 'add') {
        await createMovie(movieData);
      } else if (modalType === 'edit' && selectedMovie) {
        await updateMovie(selectedMovie.id, movieData);
      }
      handleCloseModal();
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleDeleteMovie = async (id: number): Promise<void> => {
    try {
      await deleteMovie(id);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddMovie={handleAddMovie} />
      
      <main className="container mx-auto px-4 py-8">
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={fetchMovies}
          />
        )}
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {movies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No movies found</p>
                <button
                  onClick={handleAddMovie}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Add Your First Movie
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onEdit={handleEditMovie}
                    onDelete={handleDeleteMovie}
                    onView={handleViewMovie}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {(modalType === 'add' || modalType === 'edit') && (
        <MovieForm
          movie={selectedMovie || undefined}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseModal}
        />
      )}

      {modalType === 'view' && selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onEdit={handleEditMovie}
          onDelete={handleDeleteMovie}
        />
      )}
    </div>
  );
};

export default App;