
using API.Data;
using API.Services;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Env.Load();
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            var databasePath = Environment.GetEnvironmentVariable("DATABASE_PATH") ?? "Data/movies.db";
            var connectionString = $"Data Source={databasePath}";

            builder.Services.AddDbContext<MovieDbContext>(options =>
                options.UseSqlite(connectionString));

            // Register services
            builder.Services.AddScoped<IMovieService, MovieService>();

            // Configure CORS (optional, for frontend integration)
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowAll");
            app.UseAuthorization();
            app.MapControllers();

            // Ensure database is created and apply migrations
            using (var scope = app.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<MovieDbContext>();
                context.Database.EnsureCreated();
            }

            app.Run();
        }
    }
}
