import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../context/GlobalContext"

const Home = () => {

  const { movies } = useGlobalContext()

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/${id}`);
  };

  console.log(movies)

  return (
    <div className="container mt-5">
    <div className="row">
      {movies.map((movie, index) => (
      <div className="col-md-4" key={index}>
        <div className="card mb-4">
        <img src={movie.image} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.genre}</p>
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