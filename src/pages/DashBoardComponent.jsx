import { useAuth } from '../auth/AuthContext';
import '../styles/dashBoardComponent.css';
import AnalisisComponent from '../components/analisis/AnalisisComponent';
import RankingComponent from '../components/ranking/RankinkgComponent';
import SideBarComponent from '../components/sidebar/SidebarComponent';
import apiService from '../service/apiService';
import { useState, useEffect } from "react";

const DashboardComponent = () => {
  const [genres, setGenres] = useState([]);
  const [genero, setGenero] = useState("");
  const [averageRatingByYear, setAverageRatingByYear] = useState([]);
  const [votosPorRating, setVotosPorRating] = useState([]);
  
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

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

  useEffect(() => {
    const fetchAnalisisData = async () => {
      if (genero) {
        try {
          const analisisData = await apiService.getAnalisisData(genero);
          const { averageRatingByYear: avgRating, votosPorRating: votos } = analisisData;
          setAverageRatingByYear(avgRating);
          setVotosPorRating(votos);
        } catch (error) {
          console.error('Failed to fetch analysis data:', error);
        }
      }
    };

    fetchAnalisisData();
  }, [genero]);

  const [activeComponent, setActiveComponent] = useState("ranking");
  const { user } = useAuth();

  return (
    <div className='dashboard-container'>
      <SideBarComponent setActiveComponent={setActiveComponent}/>
      <div className="main-container">
        <p>Bienvenido {user["Full Name"]}</p>
        {activeComponent === "ranking" && <RankingComponent />}
        {activeComponent === "analisis" && 
          <AnalisisComponent 
            genres={genres} 
            handleChange={handleGeneroChange} 
            genero={genero} 
            dataLine={averageRatingByYear} 
            dataBar={votosPorRating}
          />
        }
      </div>
    </div>
  );
};

export default DashboardComponent;
