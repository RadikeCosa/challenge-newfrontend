import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/loginComponent.css';
import moviesLogin from "../assets/moviesLogin.svg";
import { useAuth } from "./AuthContext";
import { loginUser } from "./AuthService";  // Importa el servicio de autenticación

const LoginComponent = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === "" || password === "") {
      setError(true);
      return;
    }

    try {
      const userData = await loginUser(user, password);  // Usa el servicio de autenticación
      login(userData.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title-content">
          <img src={moviesLogin} alt="Movies Login" />
          <h1 className="form-title">Movie Page</h1>
        </div>
        <div className="subtitle-content">
          <p>Ingresa a tu cuenta</p>
        </div>
        <input
          className="form-input user"
          type="text"
          placeholder="usuario"
          value={user}
          onChange={({ target }) => setUser(target.value)}
        />
        <input
          className="form-input password"
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button className="form-button" type="submit">
          Acceder
        </button>
      </form>
      {error && <p>todos los campos son obligatorios</p>}
    </div>
  );
};

export default LoginComponent;
