import React, { useState, useEffect } from 'react';

const Movie = () => {
  // State to hold the movie data
  const [movie, setMovie] = useState({});

  // State to hold the error message
  const [errorMessage, setErrorMessage] = useState('');

  // Use effect hook to fetch the movie data when component mounts
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=0948b80233e669620d9c8534df35db65")
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setErrorMessage('Error fetching movie data');
        console.error('Error fetching movie data: ', error);
      });
  }, []);

  return (
    <div>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <p>Title: {movie.title}</p>
      <p>Overview: {movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default Movie;
