import apiService from "../service/apiService";

const handleClickRow = async (userId, movieId) => {
  try {
    // Llamada a la función checkVote utilizando userId
    const response = await apiService.checkVote(userId, movieId);
    if (response.rating !== undefined) {
      // Si existe la propiedad "rating"
      alert(`Usted votó esta película con: ${response.rating}`);
    } else if (response.error !== undefined) {
      // Si existe la propiedad "error"
      alert('Usted no votó esta película');
    } else {
      // Si ninguna de las propiedades anteriores está presente
      alert('Error inesperado');
    }
  } catch (error) {
    console.error('Error al verificar el voto:', error);
  }
};
export default handleClickRow