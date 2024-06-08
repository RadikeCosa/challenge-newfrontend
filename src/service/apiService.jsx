import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

const getGenres = async () => {
  return fetchData('getgenres');
};


const getAnalisisData = async (genre) => {
  return fetchData(`peliculas/analisisvotosyrating/${genre}`);
};

export default {
  getGenres,
  getAnalisisData,
};
