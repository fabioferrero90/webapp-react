import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
  const api_base_url = import.meta.env.VITE_API_URL
  const [movies, setMovies] = useState([])

  const fetchMoviesData = () => {
    axios.get(`${api_base_url}/movies`)
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento dei Film: ', err);
      })
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <GlobalContext.Provider value= {{movies, fetchMoviesData}}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalProvider, useGlobalContext}