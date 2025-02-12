import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true)
    axios.get(`${api_base_url}/movies`)
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento dei Film: ', err);
      })
      .finally(() => {
        setIsLoading(false)
      });
    }

  const deleteMovie = (id, cb) => {
    setIsLoading(true)
    axios.delete(`${api_base_url}/movies/${id}`)
    .then(res => cb())
    .catch(err => {
      console.log('Errore nella cancellazione del Film: ', err);
    })
    .finally(() => {
      setIsLoading(false)
    });
  }

  const fetchDetails = (id) => {
    setIsLoading(true)
    axios.get(`${api_base_url}/movies/${id}`)
      .then(res => {
        setDetails(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento dei dati: ', err);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <GlobalContext.Provider value= {{isLoading, setIsLoading, movies, fetchMoviesData, fetchDetails, details, deleteMovie}}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext}