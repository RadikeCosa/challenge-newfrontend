import axios from "axios";

export const loginUser = async (user, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      user: user,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};
