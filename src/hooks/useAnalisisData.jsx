import { useState, useEffect } from "react";
import apiService from '../service/apiService';

const useAnalisisData = () => {
  const [genres, setGenres] = useState([]);
  const [averageRatingByYear, setAverageRatingByYear] = useState([]);
  const [votosPorRating, setVotosPorRating] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await apiService.getGenres();
        setGenres(genresData);
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const fetchAnalisisData = async (genero) => {
    try {
      const analisisData = await apiService.getAnalisisData(genero);
      const { averageRatingByYear: avgRating, votosPorRating: votos } = analisisData;
      setAverageRatingByYear(avgRating);
      setVotosPorRating(votos);
    } catch (error) {
      console.error('Failed to fetch analysis data:', error);
    }
  };

  return { genres, averageRatingByYear, votosPorRating, fetchAnalisisData };
};

export default useAnalisisData;