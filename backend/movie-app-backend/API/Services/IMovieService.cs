using API.DTO;

namespace API.Services
{
    public interface IMovieService
    {
        Task<IEnumerable<MovieDto>> GetAllMoviesAsync();
        Task<MovieDto?> GetMovieByIdAsync(int id);
        Task<MovieDto> CreateMovieAsync(CreateMovieDto createMovieDto);
        Task<MovieDto?> UpdateMovieAsync(int id, UpdateMovieDto updateMovieDto);
        Task<bool> DeleteMovieAsync(int id);
    }
}
