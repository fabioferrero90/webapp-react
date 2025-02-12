import { useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
const ReviewList = ({ data = [] , movie_id}) => {
  const api_base_url = import.meta.env.VITE_API_URL
 
  const initialFormData = {
    name: '',
    vote: '',
    text: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const { fetchDetails } = useGlobalContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    axios.post(`${api_base_url}/movies/${movie_id}/review`, {
      name: formData.name,
      vote: formData.vote,
      text: formData.text
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).finally(
      setIsLoading(false)
    )
    ;
    setFormData({
      name: '',
      vote: '',
      text: ''
    });
    fetchDetails(movie_id)
  };

  return (
    <>
      <div>
        <h2>Reviews</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Array.isArray(data) ? data.map(review => (
            <div key={review.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <p>{review.text}</p>
              <p><strong>- {review.name}</strong></p>
            </div>
          )) : <p>No reviews available</p>}
        </div>
      </div>
      <form className="my-2 p-3 border border-4 rounded-3" onSubmit={handleSubmit}>
        <h4>Inserisci nuova recensione</h4>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Il tuo nome</label>
          <input type="text" 
          className="form-control" 
          placeholder="Inserisci il tuo nome"
          id="name"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vote" className="form-label">Voto sul film</label>
          <input type="number" className="form-control" id="vote" placeholder="Inserisci voto da 1 a 5"
          value={formData.vote}
          onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Recensione</label>
          <textarea className="form-control" id="text" rows="2"
          value={formData.text}
          onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Invia Recensione</button>
      </form>
    </>
  );
};

export default ReviewList;