# movie-app-react

Get the latest changes from master brance

🎬 Movie Management Web Application
A full-stack movie management application built with ⚛️ React TypeScript frontend and 🔧 .NET Core Web API backend, featuring a 🗄️ SQLite database with Entity Framework Core.
🎬 Features

✨ Complete CRUD Operations: Create, read, update, and delete movies
📱 Responsive Design: Modern UI that works seamlessly on desktop and mobile devices
⚡ Real-time Updates: Immediate UI updates after data operations
🖼️ Image Handling: Movie poster display with automatic fallback for broken images
🔒 Type-Safe Development: Full TypeScript implementation for enhanced developer experience
❌ Error Handling: Comprehensive error handling with user-friendly feedback
⚠️ Confirmation Dialogs: Safe deletion with confirmation prompts
🪟 Modal System: Clean modal interfaces for movie details and forms

🏗️ Architecture
🎯 Frontend (React + TypeScript)

🧩 Components: Header, MovieCard, MovieForm, Modals
🎣 Custom Hooks: useMovies for state management
🔌 Services: API integration layer
📝 Type Definitions: TypeScript interfaces

⚙️ Backend (.NET Core Web API)

🎛️ Controllers: MoviesController for HTTP endpoints
🏢 Services: Business logic layer
📊 Models: Movie entity definitions
📦 DTOs: Data Transfer Objects
🗄️ Data: Entity Framework + SQLite database

🔄 Data Flow
⚛️ React Components → 🎣 Custom Hooks → 🔌 API Service → 🎛️ .NET Controller → 🏢 Service Layer → 📊 Entity Framework → 🗄️ SQLite

🚀 Quick Start
📋 Prerequisites

📦 Node.js (v16+ recommended)
🔧 .NET 8.0 SDK
📂 Git


📖 API Documentation
🛤️ Endpoints

📥 GET    /api/movies                        Get all movies
📥 GET    /api/movies/{id}                   Get movie by ID
📤 POST   /api/movies                        Create new movie
✏️ PUT    /api/movies/{id}                   Update existing movie
🗑️ DELETE /api/movies/{id}                   Delete movie


🎬 Movie Model
json{
  "id": 1,
  "name": "The Shawshank Redemption",
  "category": "Drama",
  "director": "Frank Darabont",
  "description": "Two imprisoned men bond over years...",
  "poster": "https://example.com/poster.jpg"
}

🛠️ Technology Stack
🎨 Frontend

⚛️ React 18 with TypeScript
🎨 Tailwind CSS for styling
📡 Axios for HTTP requests
🎣 Custom Hooks for state management

⚙️ Backend

🔧 .NET 8.0 Web API
📊 Entity Framework Core for ORM
🗄️ SQLite database
📚 Swagger for API documentation
🌍 DotNetEnv for environment variables


📁 Project Structure
🎬 movie-management-app/
│
├── 🛠️ MovieApi/                          # Backend .NET Core API
│   ├── 🎛️ Controllers/
│   │   └── MoviesController.cs
│   ├── 🗄️ Data/
│   │   ├── MovieDbContext.cs
│   │   └── movies.db                  # SQLite database
│   ├── 📦 DTOs/
│   │   └── MovieDto.cs
│   ├── 📊 Models/
│   │   └── Movie.cs
│   ├── 🏢 Services/
│   │   ├── IMovieService.cs
│   │   └── MovieService.cs
│   ├── 🌍 .env                           # Environment variables
│   └── Program.cs
│
├── 🎨 movie-frontend/                     # Frontend React App
│   ├── 📁 src/
│   │   ├── 🧩 components/
│   │   │   ├── Header.tsx
│   │   │   ├── MovieCard.tsx
│   │   │   ├── MovieForm.tsx
│   │   │   ├── MovieDetailModal.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── ErrorMessage.tsx
│   │   ├── 🎣 hooks/
│   │   │   └── useMovies.ts
│   │   ├── 🔌 services/
│   │   │   └── movieService.ts
│   │   ├── 📝 types/
│   │   │   └── movie.types.ts
│   │   ├── App.tsx
│   │   └── index.css
│   ├── 🌍 .env                           # Environment variables
│   └── package.json
│
├── 📚 docs/                              # Documentation
│   ├── dev-instructions.md
│   └── react-movie-frontend-setup.md
│
└── 📖 README.md












