import axios from "axios";
const server = "http://localhost:3000/api/login"
//const serverRender = "https://challenge-backend-axa4.onrender.com/api/login"
export const loginUser = async (user, password) => {
  try {
    const response = await axios.post(server, {
      user: user,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};
