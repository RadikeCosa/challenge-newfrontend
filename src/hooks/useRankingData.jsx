import { useState, useEffect } from "react";
import apiService from '../service/apiService';

const useRankingData = () => {
  const [moviesByName, setMoviesbyName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesbyName = async (name) => {
      try {
        const moviesData = await apiService.getMovieByName(name);
        setMoviesbyName(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
        setLoading(false);
      }
    };

    fetchMoviesbyName();
  }, []);

  return { moviesByName, loading };
};

export default useRankingData;
