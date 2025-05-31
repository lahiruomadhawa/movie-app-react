namespace API.DTO
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Poster { get; set; } = string.Empty;
    }

    public class CreateMovieDto
    {
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Poster { get; set; } = string.Empty;
    }

    public class UpdateMovieDto
    {
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Poster { get; set; } = string.Empty;
    }
}
