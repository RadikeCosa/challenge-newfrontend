import { useAuth } from '../auth/AuthContext';
import '../styles/dashBoardComponent.css';
import AnalisisComponent from '../components/analisis/AnalisisComponent';
import RankingComponent from '../components/ranking/RankingComponent';
import SideBarComponent from '../components/sidebar/SidebarComponent';
import { useState, useEffect } from "react";
import useAnalisisData from '../hooks/useAnalisisData';

const DashboardComponent = () => {
  const [genero, setGenero] = useState("");
  const { genres, averageRatingByYear, votosPorRating, fetchAnalisisData } = useAnalisisData();
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  useEffect(() => {
    if (genero) {
      fetchAnalisisData(genero);
    }
  }, [genero, fetchAnalisisData]);


  

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
