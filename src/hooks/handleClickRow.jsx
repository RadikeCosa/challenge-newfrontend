import apiService from "../service/apiService";
import Swal from "sweetalert2";
import VoteModal from '../components/ranking/VoteModal'

const handleClickRow = async (userId, movieId) => {
  try {
    const response = await apiService.checkVote(userId, movieId);
    console.log(response)
    if (response.rating !== undefined) {
      VoteModal(
        `Usted votó esta película con: ${response.rating}`,
        response.rating,
        userId,
        movieId,
        true
      );
    } else if (response.error !== undefined) {
      VoteModal(
        "Usted no votó esta película. Registre su voto:",
        0,
        userId,
        movieId,
        false
      );
    } else {
      Swal.fire('Error inesperado');
    }
  } catch (error) {
    console.error('Error al verificar el voto:', error);
    Swal.fire('Error al verificar el voto');
  }
}; 

export default handleClickRow;