import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Component for each movie card
const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </Link>
  );
};

// Component for movie detail page
const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=0948b80233e669620d9c8534df35db65`
      );
      setMovie(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

// Main component
const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=0948b80233e669620d9c8534df35db65'
      );
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Route exact path="/" render={() => (
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )} />
      <Route path="/movies/:id" component={MovieDetail} />
    </Router>
  );
};

export default App;
