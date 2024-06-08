import LoginForm from "./auth/LoginComponent";
import DashboardComponent from "./pages/DashBoardComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import { AuthProvider } from "./auth/AuthContext";
import './App.css'

function App() {
  

  return (
    
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
      
      
      )
}

export default App
