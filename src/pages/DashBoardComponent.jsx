import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

import '../styles/dashBoardComponent.css'

import AnalisisComponent from '../components/analisis/AnalisisComponent'
import RankingComponent from '../components/ranking/RankinkgComponent'
import SideBarComponent from '../components/sidebar/SidebarComponent'

const DashboardComponent = () =>{

  const [activeComponent, setActiveComponent] = useState("ranking");
  const { user } = useAuth();

  return(
    <div className='dashboard-container'>
    <SideBarComponent  setActiveComponent={setActiveComponent}/>
    <div className="main-container">
        <p>Bienvenido {user["Full Name"]}</p>
        {activeComponent === "ranking" && <RankingComponent />}
        {activeComponent === "analisis" && <AnalisisComponent />}
      </div>
    </div>
  )
}
export default DashboardComponent