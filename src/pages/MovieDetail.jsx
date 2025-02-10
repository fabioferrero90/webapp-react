import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewList from '../components/ReviewList';
import Stars from '../components/partials/stars';

const MovieDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-column m-5">
      <div className="row mb-5">
        <img className="col-2 pr-5" src="movie-cover.jpg" alt="Movie Cover"/>
        <div className="col-10 px-3">
          <h1>Movie Title</h1>
          <p><strong>Genre:</strong> Movie Genre</p>
          <p><strong>Author:</strong> Movie Author</p>
          <p><strong>Year:</strong> Release Year</p>
          <p><strong>Description:</strong> Movie Description</p>
          <Stars rating = "4" />
        </div>
      </div>
      <ReviewList />
      <button className="btn btn-secondary my-4" onClick={() => navigate(-1)}>Torna Indietro</button>
    </div>
  );
};

export default MovieDetail;