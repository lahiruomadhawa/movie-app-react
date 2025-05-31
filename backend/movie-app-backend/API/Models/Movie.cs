using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Category { get; set; } = string.Empty;

        [Required]
        public string Director { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public string Poster { get; set; } = string.Empty;
    }
}
