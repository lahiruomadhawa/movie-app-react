import React from 'react';

interface HeaderProps {
  onAddMovie: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddMovie }) => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>
            <h1 className="text-3xl font-bold">Movie Library</h1>
            <h3 className="font-bold">Showcase WebApp (React + .Net Core API)</h3>
          </p>          
          <button
            onClick={onAddMovie}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Add Movie
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;