using API.Data;
using API.DTO;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class MovieService : IMovieService
    {
        private readonly MovieDbContext _context;

        public MovieService(MovieDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MovieDto>> GetAllMoviesAsync()
        {
            var movies = await _context.Movies.ToListAsync();
            return movies.Select(m => MapToDto(m));
        }

        public async Task<MovieDto?> GetMovieByIdAsync(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            return movie != null ? MapToDto(movie) : null;
        }

        public async Task<MovieDto> CreateMovieAsync(CreateMovieDto createMovieDto)
        {
            var movie = new Movie
            {
                Name = createMovieDto.Name,
                Category = createMovieDto.Category,
                Director = createMovieDto.Director,
                Description = createMovieDto.Description,
                Poster = createMovieDto.Poster
            };

            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return MapToDto(movie);
        }

        public async Task<MovieDto?> UpdateMovieAsync(int id, UpdateMovieDto updateMovieDto)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null) return null;

            movie.Name = updateMovieDto.Name;
            movie.Category = updateMovieDto.Category;
            movie.Director = updateMovieDto.Director;
            movie.Description = updateMovieDto.Description;
            movie.Poster = updateMovieDto.Poster;

            await _context.SaveChangesAsync();
            return MapToDto(movie);
        }

        public async Task<bool> DeleteMovieAsync(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null) return false;

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
            return true;
        }

        private static MovieDto MapToDto(Movie movie)
        {
            return new MovieDto
            {
                Id = movie.Id,
                Name = movie.Name,
                Category = movie.Category,
                Director = movie.Director,
                Description = movie.Description,
                Poster = movie.Poster
            };
        }
    }
}
