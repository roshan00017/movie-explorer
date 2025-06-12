# Movie Explorer

A React-based web application for discovering and managing your favorite movies. Browse popular movies, search for specific titles, and maintain a personal watchlist.

## Technologies Used

- **Frontend Framework**:

  - [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) for build tooling

- **State Management**:

  - [Redux Toolkit](https://redux-toolkit.js.org/) for state management
  - [React Redux](https://react-redux.js.org/) for React bindings

- **Routing**:

  - [React Router](https://reactrouter.com/) for navigation

- **Styling**:

  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - Dark/Light theme support

- **API**:
  - [TMDB API](https://www.themoviedb.org/documentation/api) for movie data
  - [Axios](https://axios-http.com/) for HTTP requests

## Features

- Browse popular movies
- Search movies by title
- Add/remove movies to watchlist
- Persistent watchlist storage
- Responsive design
- Dark/Light theme toggle

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your TMDB API key:

```
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```
