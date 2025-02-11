import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
  const api_base_url = import.meta.env.VITE_API_URL

  const defaultFormData = {
    vote: 0,
    name: '',
    text: ''
  }

  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState()
  const [formData, setFormData] = useState(defaultFormData)


  const fetchMoviesData = () => {
    axios.get(`${api_base_url}/movies`)
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento dei Film: ', err);
      })
    }

  const fetchDetails = (id) => {
    axios.get(`${api_base_url}/movies/${id}`)
      .then(res => {
        setDetails(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento dei dati: ', err);
      })
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <GlobalContext.Provider value= {{movies, fetchMoviesData, fetchDetails, details}}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext}