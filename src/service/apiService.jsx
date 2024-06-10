import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';
// const API_BASE = "https://challenge-backend-axa4.onrender.com/api"

// Función genérica para obtener datos desde una URL con un endpoint específico
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

// Función para obtener géneros
const getGenres = async () => {
  return fetchData('getgenres');
};

const getReleaseYears = async () =>{
   return fetchData('getreleaseyears')
}

// Función para obtener análisis de datos por género
const getAnalisisData = async (genre) => {
  return fetchData(`peliculas/analisisvotosyrating/${genre}`);
};

// Función para obtener rating por ID
const getMoviesByRating = async (rating) => {
  return fetchData(`peliculas/rating/${rating}`);
};

// Función para obtener películas por nombre
const getMoviesByName = async (name) => {
  return fetchData(`peliculas/name/${name}`);
};

// Función para obtener películas por género
const getMoviesByGenre = async (genre) => {
  return fetchData(`peliculas/genre/${genre}`);
};

// Función para obtener películas por año
const getMoviesByYear = async (year) => {
  return fetchData(`peliculas/ano/${year}`);
};

// Función para verificar voto
const checkVote = async (userId, movieId) => {
  return fetchData(`checkvote/${userId}/${movieId}`);
};

const submitVote = async (voteData) => {
  try {
    console.log('Submitting vote with data:', voteData);
    const response = await axios.post(`${API_BASE_URL}/voto`, voteData);
    console.log('Submit response:', response);
    return response;
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
};

// Function to update a vote
const updateVote = async (voteData) => {
  try {
    console.log('Updating vote with data:', voteData);
    const response = await axios.put(`${API_BASE_URL}/voto`, voteData);
    console.log('Update response:', response);
    return response;
  } catch (error) {
    console.error('Error updating vote:', error);
    throw error;
  }
};

// Exportar todas las funciones como un objeto
export default {
  getGenres,
  getReleaseYears,
  getAnalisisData,
  getMoviesByRating,
  getMoviesByName,
  getMoviesByGenre,
  getMoviesByYear,
  checkVote,
  submitVote,
  updateVote
};
