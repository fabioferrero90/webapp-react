import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../context/GlobalContext"
import Stars from '../components/partials/stars';
import { use, useEffect } from 'react';
const Home = () => {

  const { movies, fetchMoviesData } = useGlobalContext()
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/${id}`);
  };
  
  useEffect(() => {
    fetchMoviesData()
  }, [])

  return (
    <div className="container mt-5">
    <div className="row">
      {movies.map((movie, index) => (
      <div className="col-md-3" key={index}>
        <div className="card mb-4">
        <img src={movie.image} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.genre}</p>
          <Stars rating={movie.avg_rating} />
          <button className="btn btn-primary" onClick={() => handleButtonClick(movie.id)}>Vedi Recensioni</button>
        </div>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
}

export default Home