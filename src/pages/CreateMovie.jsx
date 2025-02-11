
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateMovie = () => {
  const navigate = useNavigate()
  const api_base_url = import.meta.env.VITE_API_URL

  const initialData = {
    title: '',
    director: '',
    genre: '',
    release_year: '',
    abstract: '',
    image: null

  }
  const [formData, setFormData] = useState(initialData)
  const [thumbnail, setThumbnail] = useState('/placeholder.jpg')

  const handleSetValue = (e) => {
    const { name, value } = e.target
    if (name === 'image'){
      setThumbnail(URL.createObjectURL(e.target.files[0]))
      setFormData((prev) => ({...prev, image: e.target.files[0]}))
    } else {
      setFormData((prev) => ({...prev, [name]: value}))
    }
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    // creo un oggetto di tipo form
    const dataToSend = new FormData()
    
    for (let key in formData){
      dataToSend.append(key, formData[key])
    }

    axios.post(`${api_base_url}/movies`, dataToSend, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(() => navigate('/'))
    .catch((err) => console.log(err))
  }

  return (
    <div className="container my-5">
      <div className="card mt-4">
        <header className="card-header">
          <h1>Crea nuovo film</h1>
        </header>

        <section className="card-body">
          <form action="#" onSubmit={handleSumbit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                name= "title"
                type="text"
                className="form-control"
                placeholder='Inserisci il titolo del film'
                value={formData.title}
                onChange={handleSetValue}
                />
            </div>
            <div className="form-group">
              <label>Regista</label>
              <input 
                name= "director"
                type="text"
                className="form-control"
                placeholder='Inserisci il regista del film'
                value={formData.director}
                onChange={handleSetValue}
                />
            </div>
            <div className="form-group">
              <label>Genere</label>
              <input 
                name= "genre"
                type="text"
                className="form-control"
                placeholder='Inserisci il genere del film'
                value={formData.genre}
                onChange={handleSetValue}
                />
            </div>
            <div className="form-group">
              <label>Anno di uscita</label>
              <input 
                name= "release_year"
                type="number"
                className="form-control"
                placeholder="Inserisci l'anno di uscita del film"
                value={formData.release_year}
                onChange={handleSetValue}
                />
            </div>
            <div className="form-group">
              <label>Descrizione</label>
              <input 
                name= "abstract"
                type="text-area"
                className="form-control"
                placeholder='Inserisci la descrizione film'
                value={formData.abstract}
                onChange={handleSetValue}
                />
            </div>
            <div className="form-group">
              <label>Immagine</label>
              <input 
                name= "image"
                type="file"
                className="form-control"
                onChange={handleSetValue}
                />
              <img className="preview-img py-2" src={thumbnail} alt="preview" />
            </div>
            <button type="submit" className="mt-2 btn btn-primary">Inserisci Film</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default CreateMovie