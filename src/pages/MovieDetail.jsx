import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewList from '../components/ReviewList';
import Stars from '../components/partials/stars';
import { useGlobalContext } from "../context/GlobalContext"

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchDetails, details } = useGlobalContext();

  useEffect(() => {
    fetchDetails(id)  
  }, [id]);

  // if (!details) {
  //   return <div className="flex justify-content-center align-items-center">Caricamento in corso...</div>;
  // }

  return (
    <div className="flex flex-column m-5">
      <div className="row mb-5">
        <img className="detail-cover col-3 pr-5" src={details?.image} alt="Movie Cover"/>
        <div className="col-9 px-3">
          <h1>{details?.title}</h1>
          <p><strong>Genere:</strong> {details?.genre}</p>
          <p><strong>Regista:</strong> {details?.director}</p>
          <p><strong>Anno:</strong> {details?.release_year}</p>
          <p><strong>Description:</strong> {details?.abstract}</p>
          <Stars rating="4" />
        </div>
      </div>
      { details?.reviews && (
        <ReviewList data={details?.reviews} movie_id={id} />
      )}
      <button className="btn btn-secondary my-4" onClick={() => navigate(-1)}>Torna Indietro</button>
    </div>
  );
};

export default MovieDetail;